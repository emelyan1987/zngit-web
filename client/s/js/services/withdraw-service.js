module.service('WithdrawService', function(Withdraw) {

  var withdraws = null;

  this.init = function() {
    withdraws = null;
  }
  this.getWithdraws = function(reload, callback) {
      if(withdraws!=null && !reload) { //console.log("Cached BookItems:"); console.log(bookItems);
        callback(withdraws);
      } else {
        Withdraw.list()
        .$promise
        .then(function (response) {
          withdraws = response.toJSON().items;
          callback(withdraws);
        })
        .catch(function(reason){
          console.log("getWithdraws failed with the reason:"); console.log(reason);
          callback([]);
        });
      }

  }
});
