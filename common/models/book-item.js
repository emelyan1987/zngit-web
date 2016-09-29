module.exports = function(BookItem) {
  var loopback = require('loopback');

  BookItem.observe('before save', function initData(ctx, next) {
    var context = loopback.getCurrentContext();
    var accessToken = context.get('accessToken');
    var userId = accessToken.userId;

    var timestamp = new Date().getTime() / 1000;

    if (ctx.isNewInstance) {
      ctx.instance.created_time = timestamp;
      ctx.instance.updated_time = timestamp;

      ctx.instance.renter_id = userId;
    } else {
      ctx.data.updated_time = timestamp;
    }
    next();
  });

  BookItem.observe('access', function logQuery(ctx, next) {
    //console.log('Accessing %s matching %s', ctx.Model.modelName, ctx.query.where);
    if(!ctx.query.where)
      ctx.query.where = {};

    if(!ctx.query.where.and)
      ctx.query.where.and = [];

    ctx.query.where.and.push({or:[{is_refunded:null},{is_refunded:false}]});
    next();
  });

  BookItem.observe('after save', function(ctx, next) {
    if (ctx.instance) {
      console.log("After save book item result:"); console.log(ctx.instance);
      var app = BookItem.app;

      // After book item was saved process the handle for register customer.
      app.models.RentalItem.findById(ctx.instance.item_id, {fields:'shop_id'}, function(err,rentalItem){
        console.log("After save book item RentalItem:", rentalItem);
        //
        // BookItem.app.models.Shop.findById(rentalItem.shop_id, {include:'customers'}, function(err, shop) {
        //   console.log("Shop:"); console.log(shop); console.log("RenterID="+ctx.instance.renter_id);
        //   shop.customers.create({id:ctx.instance.renter_id}, function(err, response) {console.log("ERROR"); console.log(err);
        //     console.log("After renter to shop response:");console.log(response);
        //   });
        // });
        var shopId = rentalItem.shop_id,
            customerId = ctx.instance.renter_id;
        app.models.Customer.find({where:{shop_id:shopId,customer_id:customerId}}, function(err, customers){
          if(!err) {
            if(!customers || customers.length==0) {
              app.models.Customer.create({shop_id:rentalItem.shop_id,customer_id:ctx.instance.renter_id}, function(err, response){
                if(err) {
                  console.log("Create customer err"); console.log(err);
                } else {
                  console.log("Create customer result"); console.log(response);
                }
              });
            } else {
              console.log("Duplicated customer");
            }
          }
        });

        app.models.Actor.findById(ctx.instance.renter_id, function(err, renter){
          if(!err) {
            renter.transaction_id = ctx.instance.id;
            renter.transaction_time = ctx.instance.created_time;

            renter.updateAttributes({transaction_id:ctx.instance_id,transaction_time:ctx.instance.created_time}, function(err, response){
              if(err) {
                console.log("Renter transaction data updated failure");
              }
            });
          }
        });



      });
    } else {

    }
    next();
  });



  BookItem.list = function(params, cb) {
   var  context = loopback.getCurrentContext(),
        accessToken = context.get('accessToken'),
        userId = accessToken.userId,
        app = BookItem.app,
        userType = context.get('userType'),
        shopId = context.get('shopId');

        console.log("BOOKITEM LISt"); console.log(userType+":"+shopId);
    if(!userType) {
      cb("Could not get user type"); return;
    }

    var limit = params&&params.size ? params.size : 100,
        skip = params&&params.page ? (params.page-1) * limit : 0;

    if(userType == 'S') {//if user is ShopOwner
      if(!shopId) {
        cb("Could not get shop info of user", null); return;
      }

      app.models.RentalItem.find({where:{shop_id:shopId},fields:{id:true}}, function(err, rentalItems){
        if(err) {
          cb(err, null);
          return;
        }

        var rentalItemIds = new Array();
        for(var i=0; i<rentalItems.length; i++) {
          rentalItemIds.push(rentalItems[i].id);
        }

        app.models.BookItem.find({include:["renter","rentalItem"], where: {item_id: {inq: rentalItemIds}}, skip:skip, limit:limit}, function(err, bookItems){
          if(err) {
            cb(err, null);
            return;
          }

          cb(null, bookItems);
        });
      });
    } else if(userType == 'A') { // if user is Administrator
      app.models.BookItem.find({include:["renter",{"rentalItem":"shop"}], skip:skip, limit:limit}, function(err, bookItems){
        if(err) {
          cb(err, null);
          return;
        }

        cb(null, bookItems);
      });
    } else if(userType == 'C') { // if user is Customer
      app.models.BookItem.find({include:["renter",{"rentalItem":"shop"}], where:{renter_id:userId}, skip:skip, limit:limit}, function(err, bookItems){
        if(err) {
          cb(err, null);
          return;
        }

        cb(null, bookItems);
      });
    }

  };
  BookItem.remoteMethod('list', {
    accepts: {arg: 'params', type: 'object'},
    returns: {arg: 'items', type: 'array'},
    http: {path:'/list', verb: 'get'}
  });

  BookItem.request = function(params, cb) {
   var  context = loopback.getCurrentContext(),
        accessToken = context.get('accessToken'),
        userId = accessToken.userId,
        app = BookItem.app;


        console.log("Request Book"); console.log("UserId="+userId); console.log(params);

        if(!userId) {
          cb("Could not identify user", null); return;
        }
        if(!params.card_data || !params.card_data.number || !params.card_data.exp_month || !params.card_data.exp_year || !params.card_data.cvc) {
          cb("Credit card info incorrect", null); return;
        }

        if(!params.quantity || !params.pickup_date || !params.pickup_time || !params.item_id) {
          cb("Input paramter incorrect", null); return;
        }

        var stripe = require("stripe")(app.get('zngit').stripe_secret_key);

        stripe.tokens.create({
          card: {
            number: params.card_data.number,
            exp_month: params.card_data.exp_month,
            exp_year: params.card_data.exp_year,
            cvc: params.card_data.cvc
          }
        }, function(err, token) {
          if(err) {
            cb(err, null); return;
          }
          var stripeToken = token.id;
          console.log("Created stripe token with the result:"); console.log(token);

          params.card_last4 = token.card.last4;
          params.card_brand = token.card.brand;
          /*stripe.customers.create({
            description: 'Zngit Customer',
            source: stripeToken
          }, function(err, customer) {
            if(err) {
              cb(err, null); return;
            }

            console.log("Created stripe customer with the result:"); console.log(customer);
          });*/

          app.models.RentalItem.findById(params.item_id, {include:'shop'}, function(err, rentalItem){
            if(err) {
              cb(err, null); return;
            }

            var amount = 0;
            var quantity = params.quantity;
            if(params.type == 1) {
              var pickupDate = new Date(params.pickup_date);
              var returnDate = new Date(params.return_date);
              var timeDiff = Math.abs(returnDate.getTime() - pickupDate.getTime());
              var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1; console.log("Date Period:"); console.log(diffDays);

              amount = rentalItem.price_per_day * diffDays * quantity;
            } else {
              amount = rentalItem.price_per_hour * params.rental_hours * quantity;
            }

            amount = amount + amount * 5 /100 + 3;  console.log("Amount="+amount);

            console.log("Stripe TOken = " + stripeToken);
            stripe.charges.create({
              amount: Math.floor(amount * 100),
              currency: "usd",
              source: stripeToken,
              description: "Charge for Zngit"
            }, function(err, charge) {
              if(err) {
                cb(err, null);return;
              }

              console.log("Created stripe charge with the result:"); console.log(charge);

              params.charge_id = charge.id;
              params.amount = amount;
              BookItem.create(params, function(err, bookItem){
                if(err) {
                  cb(err, null); return;
                }
                cb(null, bookItem);

                // Send the email to customer and shop owner and administrator

                var shop = rentalItem.toJSON().shop; console.log("Shop"); console.log(shop);

                var dateFormat = require('dateformat');
                var numeral = require('numeral');

                // Send the email to customer
                app.models.Actor.findById(userId, function(err, renter){
                  if(!err) {
                    var html =
                      '<div>'+
                      '<div>Hey there,</div><br>'+
                      '<div>You just booked an item on ZNGIT. Here are all of the details:</div><br><br>'+
                      '<div>Item'+(bookItem.quantity>1?'s':'')+': '+bookItem.quantity+' x '+rentalItem.name+'</div><br>'+
                      '<div>Total: '+ numeral(bookItem.amount).format('$0,0.00')+'</div><br>'+
                      '<div>Rental Period: '+(bookItem.type==0?'Hourly, '+bookItem.rental_hours+' hours':'Daily, by '+bookItem.return_date)+'</div><br>'+
                      '<div>Shop: '+shop.name+'</div><br>'+
                      '<div>Shop Address: '+shop._address.street+', '+shop._address.city+' '+shop._address.state+' '+shop._address.zip+'</div><br>' +
                      '<div>Pickup Time: '+dateFormat(new Date('2016-01-01').getTime() + bookItem.pickup_time*60000, 'h:MM TT')+'</div><br><br>' +
                      '<div>Enjoy your rental!</div><br><br>'+
                      '<div>- ZNGIT Team</div>'+
                      '</div>';
                        console.log("Email Html=");console.log(html);

                    app.models.Email.send({
                      to: renter.email,
                      from: app.get('zngit').email,
                      subject: 'You just booked an item on ZNGIT',
                      html: html
                    }, function(err) {
                      if (err) return console.log('> error sending receipt email for booking ');
                      console.log('> sended  receipt email for booking to:', renter.email);
                    });

                    var html =
                      '<div>'+
                      '<div>Hey there,</div><br>'+
                      '<div>'+renter.fullname+' just booked a rental item on ZNGIT. Here are all of the details:</div><br><br>'+
                      '<div>Item'+(bookItem.quantity>1?'s':'')+': '+bookItem.quantity+' x '+rentalItem.name+'</div><br>'+
                      '<div>Total: '+ numeral(bookItem.amount).format('$0,0.00')+'</div><br>'+
                      '<div>Rental Period: '+(bookItem.type==0?'Hourly, '+bookItem.rental_hours+' hours':'Daily, by '+bookItem.return_date)+'</div><br>'+
                      '<div>Shop: '+shop.name+'</div><br>'+
                      '<div>Shop Address: '+shop._address.street+', '+shop._address.city+' '+shop._address.state+' '+shop._address.zip+'</div><br>' +
                      '<div>Pickup Time: '+dateFormat(new Date('2016-01-01').getTime() + bookItem.pickup_time*60000, 'h:MM TT')+'</div><br><br>' +
                      '<div>Customer Email: '+renter.email+'</div><br>'+
                      '<div>Customer Name: '+renter.fullname+'</div><br>'+
                      '<div>Have a nice day!</div><br><br>'+
                      '<div>- ZNGIT Team</div>'+
                      '</div>';
                        console.log("Email Html=");console.log(html);

                    // send email to the shop owner
                    app.models.Actor.findById(shop.owner_id, function(err, owner){
                      if(!err) {
                        app.models.Email.send({
                          to: owner.email,
                          from: app.get('zngit').email,
                          subject: 'A customer just booked a rental item on ZNGIT',
                          html: html
                        }, function(err) {
                          if (err) return console.log('> error sending receipt email for booking ');
                          console.log('> sended receipt email for booking to:', owner.email);
                        });
                      }
                    });

                    // send email to the shop owner
                    app.models.Actor.find({where:{type:'A'}}, function(err, administrators){
                      if(!err) {
                        var emails = new Array();
                        for(var i=0; i<administrators.length; i++) {
                          emails.push(administrators[i].email);
                        }

                        app.models.Email.send({
                          to: emails,
                          from: app.get('zngit').email,
                          subject: 'A customer just booked a rental item on ZNGIT',
                          html: html
                        }, function(err) {
                          if (err) return console.log('> error sending receipt email for booking ');
                          console.log('> sended  receipt email for booking to:', emails.join(','));
                        });
                      }
                    });
                  }
                });


              });

            });

          });
        });

  };
  BookItem.remoteMethod('request', {
    accepts: {arg: 'params', type: 'object'},
    returns: {arg: 'item', type: 'object'},
    http: {path:'/request', verb: 'post'}
  });

  BookItem.myBookingItems = function(params, cb) {
   var  context = loopback.getCurrentContext(),
        accessToken = context.get('accessToken'),
        userId = accessToken.userId,
        app = BookItem.app;

    console.log("My Booking Items");


    var limit = params&&params.size ? params.size : 25,
        skip = params&&params.page ? (params.page-1) * limit : 0;

    app.models.BookItem.find({include:["renter",{"rentalItem":["shop","images"]}], where:{renter_id:userId}, skip:skip, limit:limit}, function(err, bookItems){
      if(err) {
        cb(err, null);
        return;
      }

      cb(null, bookItems);
    });

  };
  BookItem.remoteMethod('myBookingItems', {
    accepts: {arg: 'params', type: 'object'},
    returns: {arg: 'items', type: 'array'},
    http: {path:'/myBookingItems', verb: 'get'}
  });


  BookItem.createStripeToken = function(card, cb) {
   var  context = loopback.getCurrentContext(),
        accessToken = context.get('accessToken'),
        userId = accessToken.userId,
        app = BookItem.app;


        console.log("createStripToken"); console.log("UserId="+userId); console.log(card);

        if(!card || !card.number || !card.exp_month || !card.exp_year || !card.cvc){
          cb("Card Data Incorrect", null); return;
        }
        var stripe = require("stripe")(app.get('zngit').stripe_secret_key);

        stripe.tokens.create({
          card: card
        }, function(err, token) {
          if(err) {
            cb(err, null); return;
          }

          cb(null, token);
        });

  };
  BookItem.remoteMethod('createStripeToken', {
    accepts: {arg: 'card', type: 'object'},
    returns: {type: 'object', root:true},
    http: {path:'/createStripeToken', verb: 'post'}
  });

  BookItem.refund = function(id, cb) {
   var  context = loopback.getCurrentContext(),
        accessToken = context.get('accessToken'),
        userId = accessToken.userId,
        app = BookItem.app;


        BookItem.findById(id, {include:{rentalItem:'shop'}}, function(err, bookItem){
          if(err) {
            cb(err, null); return;
          }

          var chargeId = bookItem.charge_id;

          if(!chargeId || bookItem.withdrawable) {
            cb(new Error("Could not refund for this transaction"), null); return;
          }

          var stripe = require("stripe")(app.get('zngit').stripe_secret_key);

          var amount = bookItem.amount * 100;
          stripe.refunds.create({
            charge: chargeId,
            amount: Math.floor(20*(amount-300)/21-(amount*2.9/100+30))  // As Refund amount calculation logic
          }, function(err, refund) {
            if(err) {
              console.log("Create refun failed with the following reason"); console.log(err);
              cb(err, null); return;
            }

            console.log("Created refunds:"); console.log(refund);
            bookItem.updateAttribute('is_refunded', true, function(err, updatedBookItem){

              app.models.Actor.findById(bookItem.renter_id, function(err, renter){
                if(!err) {

                  var rentalItem = bookItem.toJSON().rentalItem,
                      shop = bookItem.toJSON().rentalItem.shop;

                  var dateFormat = require('dateformat');
                  var numeral = require('numeral');

                  var html =
                    '<div>'+
                    '<div>Hey there,</div><br>'+
                    '<div>'+renter.fullname+'\'s rental was canceled and refunded on ZNGIT. Here are the details:</div><br><br>'+
                    '<div>Customer Email: '+renter.email+'</div><br>'+
                    '<div>Item'+(bookItem.quantity>1?'s':'')+': '+bookItem.quantity+' x '+rentalItem.name+'</div><br>'+
                    '<div>Total: '+ numeral(bookItem.amount).format('$0,0.00')+'</div><br>'+
                    '<div>Rental Period: '+(bookItem.type==0?'Hourly, '+bookItem.rental_hours+' hours':'Daily, by '+bookItem.return_date)+'</div><br>'+
                    '<div>Shop: '+shop.name+'</div><br>'+
                    '<div>Shop Address: '+shop._address.street+', '+shop._address.city+' '+shop._address.state+' '+shop._address.zip+'</div><br>' +
                    '<div>Pickup Time: '+dateFormat(new Date('2016-01-01').getTime() + bookItem.pickup_time*60000, 'h:MM TT')+'</div><br><br>' +
                    '<div>Have a nice day!</div><br><br>'+
                    '<div>- ZNGIT Team</div>'+
                    '</div>';
                      console.log("Email Html=");console.log(html);

                  // send email to the administrator
                  app.models.Actor.findById(userId, function(err, administrator){
                    if(!err) {
                      app.models.Email.send({
                        to: administrator.email,
                        from: app.get('zngit').email,
                        subject: 'Booking was canceled on ZNGIT',
                        html: html
                      }, function(err) {
                        if (err) return console.log('> error sending refund email for booking ');
                        console.log('> sended  refund email for booking to:', administrator.email);
                      });
                    }
                  });

                  // send email to the shop owner
                  app.models.Actor.findById(shop.owner_id, function(err, shopOwner){
                    if(!err) {
                      app.models.Email.send({
                        to: shopOwner.email,
                        from: app.get('zngit').email,
                        subject: 'Booking was canceled on ZNGIT',
                        html: html
                      }, function(err) {
                        if (err) return console.log('> error sending refund email for booking ');
                        console.log('> sended  refund email for booking to:', shopOwner.email);
                      });
                    }
                  });

                  // send email to the customer

                  app.models.Email.send({
                    to: renter.email,
                    from: app.get('zngit').email,
                    subject: 'Booking was canceled on ZNGIT',
                    html: html
                  }, function(err) {
                    if (err) return console.log('> error sending refund email for booking ');
                    console.log('> sended  refund email for booking to:', renter.email);
                  });
                }
              });

              cb(null, refund);
            });

          });
        });

        //   stripe.tokens.create({
        //     card: {
        //       number: '4000000000000077',
        //       exp_month: 5,
        //       exp_year: 2017,
        //       cvc: '123'
        //     }
        //   }, function(err, token) {
        //     if(err) {
        //       cb(err, null); return;
        //     }
        //
        //
        //     stripe.charges.create({
        //       amount: Math.floor(30000 * 100),
        //       currency: "usd",
        //       source: token.id,
        //       description: "Charge for Zngit"
        //     }, function(err, charge) {
        //       if(err) {
        //         console.log("Create charge failed with the following reason"); console.log(err);
        //         cb(err, null);return;
        //       }
        //       console.log("Created charge:"); console.log(charge);
        //
        //     });
        //   });

  };
  BookItem.remoteMethod('refund', {
    accepts: {arg: 'id', type: 'number'},
    returns: {arg: 'refund', type: 'object', root:false},
    http: {path:'/refund', verb: 'post'}
  });
};
