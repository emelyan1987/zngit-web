module.exports = function(app) {
  var Role = app.models.Role;
  var loopback = require('loopback');

  // Define Administrator Role
  Role.registerResolver('Administrator', function(role, context, cb) { console.log("Administrator");
    function reject() {
      process.nextTick(function() {
        cb(null, false);
      });
    }

    var loopbackContext = loopback.getCurrentContext();

    // do not allow anonymous users
    console.log(context.accessToken);

    var userId = context.accessToken.userId;
    if (!userId) {
      return reject();
    }

    var userType = loopbackContext.get('userType');
    // app.models.Actor.findById(userId, function(err, actor) {
    //   if (err || actor.type !== 'A') {
    //     console.log(err);
    //     return reject();
    //   }
    //
    //   cb(null, true); // true = is a Admin
    // });
    if (userType !== 'A') {
      return reject();
    }

    cb(null, true); // true = is a Admin
  });

  // Define ShopOwner Role
  Role.registerResolver('ShopOwner', function(role, context, cb) { console.log("ShopOwner Role");
    function reject() {
      process.nextTick(function() {
        cb(null, false);
      });
    }

    var loopbackContext = loopback.getCurrentContext();
    // do not allow anonymous users

    var userId = context.accessToken.userId;
    if (!userId) {
      return reject();
    }

    var userType = loopbackContext.get('userType');
    if(!userType || userType != 'S') {
      return reject();
    }

    if(context.modelName == 'Shop') {
      if(context.property == 'create') {
        app.models.Shop.find({where:{owner_id:userId}}, function(err, shops) {
          if(err) {
            console.log(err);
            return reject();
          }

          if(shops.length>0) {
            console.log("You are already the owner of a shop");
            return reject();
          }

          cb(null, true);
        });
      } else if(context.property == 'upsert' || context.property == 'updateAttributes') {
        app.models.Shop.findById(context.modelId, function(err, shop) {
            if(err) {
              console.log(err);
              return reject();
            }
            if(userId !== shop.owner_id) {
              console.log("Is not the owner of the rental item");
              return reject();
            }

            cb(null, true);
        });
      }
    } else {
      cb(null, true);
    }

  });

  Role.registerResolver('UserOwner', function(role, context, cb) { console.log("UserOwner Role");
    function reject() {
      process.nextTick(function() {
        cb(null, false);
      });
    }

    // do not allow anonymous users
    console.log(context.accessToken.userId);
    var userId = context.accessToken.userId;
    if (!userId) {
      return reject();
    }


    if(context.modelName == 'Actor') {
      if(context.property == 'updateAttributes' || context.property == 'upsert') { console.log("Role Resolver"); console.log("ModelID="+context.modelId+":UserID="+userId);
        if(userId != context.modelId) return reject();
        cb(null, true);
      } else {
        reject();
      }
    } else {
      reject();
    }

  });

  // Define Customer Role
  Role.registerResolver('Customer', function(role, context, cb) {
    function reject() {
      process.nextTick(function() {
        cb(null, false);
      });
    }

    // do not allow anonymous users
    //console.log(context.accessToken);

    var userId = context.accessToken.userId;
    if (!userId) {
      return reject();
    }

    app.models.Actor.findById(userId, function(err, actor) {
      //console.log("UserID="+userId);
      if (err || actor.type !== 'C') {
        console.log(err);
        return reject();
      }

      cb(null, true); // true = is a Admin
    });
  });

  Role.registerResolver('RentalItemOwner', function(role, context, cb) {
    function reject() {
      process.nextTick(function() {
        cb(null, false);
      });
    }

    // do not allow anonymous users
    var userId = context.accessToken.userId;
    if (!userId) {
      return reject();
    }
    if (context.modelName === 'RentalItem') {
      app.models.RentalItem.findById(context.modelId, {include:'shop'}, function(err, item) {
          if(err) {
            console.log(err);
            return reject();
          }


          var shop = item.__cachedRelations.shop;

          if(userId !== shop.owner_id) {
            console.log("Is not the owner of the rental item:" + item.shop.owner_id);
            return reject();
          }

          cb(null, true);
      });
    } else if (context.modelName === 'BookItem') {
      //console.log("RentalItemOwner:"+context.modelId);
      app.models.BookItem.findById(context.modelId, {include:{rentalItem:'shop'}}, function(err, item) {
          if(err) {
            console.log(err);
            return reject();
          }

          item = item.toJSON();
          var owner_id = item.rentalItem.shop.owner_id;
          console.log("OWNER_ID="+owner_id);
          if(userId !== owner_id) {
            console.log("Is not the owner of the rental item");
            return reject();
          }

          cb(null, true);
      });
    } else {
      return reject();
    }
  });

  Role.registerResolver('Renter', function(role, context, cb) {
    function reject() {
      process.nextTick(function() {
        cb(null, false);
      });
    }

    // do not allow anonymous users
    var userId = context.accessToken.userId;
    if (!userId) {
      return reject();
    }

    if (context.modelName === 'BookItem') {
      app.models.BookItem.findById(context.modelId, function(err, item) {
          if(err) {
            console.log(err);
            return reject();
          }
          if(userId !== item.renter_id) {
            console.log("Is not the owner of the book item");
            return reject();
          }

          cb(null, true);
      });
    } else {
      return reject();
    }
  });

};
