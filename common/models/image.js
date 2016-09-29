module.exports = function(Image) {
  Image.observe('before save', function initData(ctx, next) {

    var timestamp = new Date().getTime() / 1000;

    if (ctx.isNewInstance) {
      ctx.instance.created_time = timestamp;
    } else {
      ctx.data.created_time = timestamp;
    }
    next();
  });
};
