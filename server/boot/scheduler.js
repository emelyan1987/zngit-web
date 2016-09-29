module.exports = function(app) {
  var schedule = require('node-schedule');

  /**
  * Check and update their status as "BidsAvailable" tasks posted newly every 10 minutes
  */
  function checkWithdrawable() {
    schedule.scheduleJob('0 /30 * * * *', function() {
      console.log('checkWithdrawable job started');
      var beforeTime = 24*60*60;  // before 24 hours booking items

      app.models.BookItem.find({where:{and:[{created_time:{lte:Date.now()/1000-beforeTime}},{charge_id:{neq:null}},{or:[{withdrawable:null},{withdrawable:false}]}]}}, function(err,bookItems){
        if(err || bookItems.length==0) {
          return;
        } else {
          function updateBalance(bookItem, callback) { //console.log("BookItem:"); console.log(bookItem);
            var ds = app.datasources.ZngitDB;
            var sql = "call zn_update_balance("+bookItem.id+")";

            ds.connector.execute(sql,function(err,response){
              callback(err,response);
            });
          }


          function final() { return; }

          function series(bookItem) { //console.log("Series");
            if(bookItem) { //console.log(bookItem);
              updateBalance(bookItem, function(err, result) {
                return series(bookItems.shift());
              });
            } else {
              return final();
            }
          }
          series(bookItems.shift());
        }
      });
    });

    console.log('checkWithdrawable job created');
  }

  checkWithdrawable();

};
