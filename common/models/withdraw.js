module.exports = function(Withdraw) {
  var loopback = require('loopback');

  Withdraw.observe('before save', function initData(ctx, next) {

    var timestamp = new Date().getTime() / 1000;

    if (ctx.isNewInstance) {
      ctx.instance.created_time = timestamp;
    } else {
      ctx.data.created_time = timestamp;
    }
    next();
  });

  Withdraw.list = function(params, cb) {
   var  context = loopback.getCurrentContext(),
        accessToken = context.get('accessToken'),
        userId = accessToken.userId,
        app = Withdraw.app,
        userType = context.get('userType'),
        shopId = context.get('shopId');

    if(!userType || userType!='S') {
      cb("You are not the shop owner."); return;
    }
    if(!shopId) {
      cb("Could not get your shop info.", null); return;
    }

    app.models.Withdraw.find({where:{shop_id:shopId}}, function(err, withdraws){
      if(err) {
        cb(err, null);
        return;
      }

      cb(null, withdraws);
    });

  };
  Withdraw.remoteMethod('list', {
    accepts: {arg: 'params', type: 'object'},
    returns: {arg: 'items', type: 'array'},
    http: {path:'/list', verb: 'get'}
  });

  Withdraw.withdraw = function(amount, cb) {
   var  context = loopback.getCurrentContext(),
        accessToken = context.get('accessToken'),
        userId = accessToken.userId,
        app = Withdraw.app,
        userType = context.get('userType'),
        shopId = context.get('shopId');

    if(!userType || userType!='S') {
      cb("You are not the shop owner."); return;
    }
    if(!shopId) {
      cb("Could not get your shop info.", null); return;
    }

    app.models.Shop.findById(shopId, {include:'balance'}, function(err, shop){
      if(err) {
        cb(err, null); return;
      }

      if(!shop.balance) {
        cb(new Error("Shop balance error"), null); return;
      }
      amount = amount>shop.balance.amount ? shop.balance.amount : amount;

      var zngit = app.get('zngit');
      var stripe = require("stripe")(zngit.stripe_secret_key);

      stripe.recipients.create({
        "name": shop.name,
        "type": shop.account_type=='C'?'corporation':'individual',
        "bank_account": {
          "country": "us",
          "routing_number": shop.routing_number,
          "account_number": shop.account_number
        },
        "tax_id": shop.account_code
      }, function(err, recipient) { console.log("Created the recipient for withdraw:"); console.log(recipient);
        if(err) {
          console.log("Create recipient error for the withdraw:"); console.log(err);
          cb(err, null); return;
        }

        stripe.transfers.create({
          amount: Math.floor(amount * 100), // amount in cents
          currency: "usd",
          recipient: recipient.id,
          bank_account: recipient.active_account.id,
          statement_descriptor: shop.name + " withdraw"
        }, function(err, transfer) { console.log("Created transfer for withdraw :"); console.log(transfer);
          if(err) {
            console.log("Create transfer error for the withdraw:");console.log(err);
            cb(err, null); return;
          }

          var destination = recipient.active_account.bank_name+' Account Ending in '+recipient.active_account.last4;
          Withdraw.create({amount:amount, shop_id:shopId, destination: destination}, function(err, withdraw){
            if(err) {
              cb(err, null); return;
            }

            cb(null, withdraw);

            // Send the email to shop owner
            app.models.Actor.findById(userId, function(err, user){
              if(!err) {
                var dateFormat = require('dateformat');
                var numeral = require('numeral');

                var html =
                  '<div>'+
                  '<div>Hey there,</div><br>'+
                  '<div>We are withdrawing '+ numeral(amount).format('$0,0.00')+' to '+shop.account_name+' ending in '+shop.account_number.substr(shop.account_number.length-4)+'. Expect to receive this payment within 3-5 business days.</div><br><br>'+
                  '<div>Have a great day!</div><br><br>'+
                  '<div>- ZNGIT Team</div>'+
                  '</div>';
                    console.log("Email Html=");console.log(html);

                app.models.Email.send({
                  to: user.email,
                  from: app.get('zngit').email,
                  subject: 'You’ve withdrawed money to your account ON ZNGIT',
                  html: html
                }, function(err) {
                  if (err) return console.log('> error sending withdraw email ');
                  console.log('> sended  withdraw email to:', user.email);
                });
              }
            });
          });
        });
        // stripe.tokens.create({
        //   card: {
        //     number: '4000000000000077',
        //     exp_month: 5,
        //     exp_year: 2017,
        //     cvc: '123'
        //   }
        // }, function(err, token) {
        //   if(err) {
        //     cb(err, null); return;
        //   }
        //
        //
        //   stripe.charges.create({
        //     amount: Math.floor(30000 * 100),
        //     currency: "usd",
        //     source: token.id,
        //     description: "Charge for Zngit"
        //   }, function(err, charge) {
        //     if(err) {
        //       cb(err, null);return;
        //     }
        //
        //   });
        // });

      });

    });




  };
  Withdraw.remoteMethod('withdraw', {
    accepts: {arg: 'amount', type: 'number'},
    returns: {arg: 'withdraw', type: 'object'},
    http: {path:'/withdraw', verb: 'post'}
  });
};
