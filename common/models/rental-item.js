module.exports = function(RentalItem) {
  var loopback = require('loopback');


  RentalItem.observe('before save', function initData(ctx, next) {

    var context = loopback.getCurrentContext();
    var accessToken = context.get('accessToken');

    var app = RentalItem.app;

    app.models.Shop.findOne({where:{owner_id:accessToken.userId}}, function(err, shop) {
      if (!err) {
        var timestamp = new Date().getTime() / 1000;

        if (ctx.isNewInstance) {
          ctx.instance.created_time = timestamp;
          ctx.instance.updated_time = timestamp;

          ctx.instance.shop_id = shop.id;
        } else {

          ctx.data.updated_time = timestamp;
        }
      }

      next();
    });
  });


  RentalItem.observe('access', function logQuery(ctx, next) {
    //console.log('Accessing %s matching %s', ctx.Model.modelName, ctx.query.where);
    if(!ctx.query.where)
      ctx.query.where = {};

    if(!ctx.query.where.and)
      ctx.query.where.and = [];

    ctx.query.where.and.push({or:[{is_deleted:null},{is_deleted:false}]});
    next();
  });
  // RentalItem.observe('before delete', function(ctx, next) {
  //   console.log("After Delete RentalItem");
  //   console.log(ctx.instance);
  //   console.log('Deleted %s matching %j',    ctx.Model.pluralModelName,    ctx.where);
  //   next();
  // });

  RentalItem.list = function(params, cb) {

   var  context = loopback.getCurrentContext(),
        accessToken = context.get('accessToken'),
        userId = accessToken.userId,
        app = RentalItem.app,
        userType = context.get('userType');



        console.log("User Type = "+userType);
        if(userType == 'S') {//if user is ShopOwner
          var shopId = context.get('shopId');
          if(!shopId) {
            cb("Could not get shop info", null); return;
          }
          app.models.RentalItem.find({where:{shop_id:shopId}, include:'images'}, function(err, rentalItems){
            if(err) {
              cb(err, null);
              return;
            }

            //console.log("RentalItems:");
            //console.log(rentalItems);
            cb(null, rentalItems);
          });
        } else if(userType == 'A') { // if user is Administrator
          app.models.RentalItem.find({include:'images'},function(err, rentalItems){
            if(err) {
              cb(err, null);
              return;
            }

            //console.log("RentalItems:");
            //console.log(rentalItems);
            cb(null, rentalItems);
          });
        } else {
          cb(null, []);
        }
  };
  RentalItem.remoteMethod('list', {
    accepts: {arg: 'params', type: 'object'},
    returns: {arg: 'items', type: 'array'},
    http: {path:'/list', verb: 'get'}
  });


  RentalItem.listByLocation = function(category_id, name, location, radius, page, size, cb) {

   var  context = loopback.getCurrentContext(),
        accessToken = context.get('accessToken'),
        app = RentalItem.app;

        app.models.Shop.find(function(err, shops) {
          if(err) {
            cb(err, null); return;
          }
          var shopIds = new Array();
          for(var i=0; i<shops.length; i++) {
            var shop = shops[i],
                address = shop._address;
                console.log("Shop Location"); console.log(address.location);
                console.log("Input Location"); console.log(location);
            if(loopback.GeoPoint.distanceBetween(address.location, location) < radius) {
              shopIds.push(shop.id);
            }
          }

          var limit = size ? size : 25,
              skip = page ? (page-1) * limit : 0,
              where = {and:[{shop_id:{inq:shopIds}}]};

              console.log("CategoryID"); console.log(category_id);
          if(category_id) {
            where.and.push({category_id:category_id});
          }
          if(name) {
            where.and.push({name: {like: '%'+name+'%'}});
          }
          console.log(where);
          app.models.RentalItem.find({where:where, skip:skip, limit:limit, include:['shop','images']}, function(err, rentalItems){
            if(err) {
              cb(err, null);
              return;
            }

            //console.log("RentalItems:");
            //console.log(rentalItems);
            cb(null, rentalItems);
          });
        });


  };
  RentalItem.remoteMethod('listByLocation', {
    accepts: [
      {arg: 'category_id', type: 'number'},
      {arg: 'name', type: 'string'},
      {arg: 'location', type: 'geopoint', required:true},
      {arg: 'radius', type: 'number', required:true},
      {arg: 'page', type: 'number'},
      {arg: 'size', type: 'number'}
    ],
    returns: {arg: 'items', type: 'array'},
    http: {path:'/listByLocation', verb: 'get'}
  });
};
