module.exports = function(Shop) {
    var loopback = require('loopback');

    Shop.observe('before save', function initData(ctx, next) {
      var context = loopback.getCurrentContext();
      var accessToken = context.get('accessToken');


      var timestamp = new Date().getTime() / 1000;

      if (ctx.isNewInstance) {
        ctx.instance.created_time = timestamp;
        ctx.instance.updated_time = timestamp;
      } else {
        ctx.data.updated_time = timestamp;
      }
      next();
    });

    Shop.observe('access', function logQuery(ctx, next) {
      //console.log('Accessing %s matching %s', ctx.Model.modelName, ctx.query.where);
      if(!ctx.query.where)
        ctx.query.where = {};

      if(!ctx.query.where.and)
        ctx.query.where.and = [];

      ctx.query.where.and.push({or:[{is_deleted:null},{is_deleted:false}]});
      next();
    });


    Shop.validateBankAccountData = function(data, cb) {

      if(!data || !data.type || !data.account_number || !data.routing_number || !data.tax_id) {
        cb(new Error("Bank account data incorrect."), null); return;
      }
      var zngit = Shop.app.get('zngit');
      var stripe = require("stripe")(zngit.stripe_secret_key);

      stripe.recipients.create({
        "name": "A shop bank account",
        "type": data.type,
        "bank_account": {
          "country": "us",
          "routing_number": data.routing_number,
          "account_number": data.account_number
        },
        "tax_id": data.tax_id
      }, function(err, recipient) { console.log("Created the recipient for the shop:"); console.log(recipient);
        if(err) {
          console.log("Create recipient error for the shop:"); console.log(err);
          cb(err, null);
          return;
        }

        cb(null, recipient);
      });
    };
    Shop.remoteMethod('validateBankAccountData', {
      accepts: {arg: 'data', type: 'object'},
      returns: {arg: 'recipient', type: 'object'},
      http: {path:'/validateBankAccountData', verb: 'post'}
    });
    
};
