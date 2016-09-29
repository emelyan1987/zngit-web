module.service('CustomerService', function(Actor) {

  var customers = null;

  this.getCustomers = function(callback) {
      if(customers!=null) { //console.log("Cached BookItems:"); console.log(bookItems);
        callback(customers);
      } else {
        Actor.list()
        .$promise
        .then(function (response) {
          customers = response;
          callback(customers);
        })
        .catch(function(reason){
          console.log("getCustomers failed with the reason:"); console.log(reason);
          callback([]);          
        });
      }
  }

  this.init = function() {
    customers = null;
  }
});
