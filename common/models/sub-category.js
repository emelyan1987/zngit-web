module.exports = function(SubCategory) {
  SubCategory.observe('before save', function initData(ctx, next) {

    var timestamp = new Date().getTime() / 1000;

    if (ctx.isNewInstance) {
      ctx.instance.created_time = timestamp;
      ctx.instance.updated_time = timestamp;
    } else {
      ctx.data.updated_time = timestamp;
    }
    next();
  });



  SubCategory.observe('access', function logQuery(ctx, next) {
    //console.log('Accessing %s matching %s', ctx.Model.modelName, ctx.query.where);
    if(!ctx.query.where)
      ctx.query.where = {};

    if(!ctx.query.where.and)
      ctx.query.where.and = [];

    ctx.query.where.and.push({or:[{is_deleted:null},{is_deleted:false}]});
    next();
  });
};
