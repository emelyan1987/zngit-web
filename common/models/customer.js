module.exports = function(Customer) {
  var loopback = require('loopback');

  Customer.observe('before save', function initData(ctx, next) {
    // var context = loopback.getCurrentContext();
    // var accessToken = context.get('accessToken');
    // var userId = accessToken.userId;

    var timestamp = new Date().getTime() / 1000;

    if (ctx.isNewInstance) {
      ctx.instance.created_time = timestamp;
      ctx.instance.updated_time = timestamp;

      //ctx.instance.renter_id = userId;
    } else {
      ctx.data.updated_time = timestamp;
    }
    next();
  });
};
