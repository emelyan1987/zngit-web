module.service('InventoryService', function(RentalItem) {

  var rentalItems = null;

  this.init = function() {
    rentalItems = null;
  }

  this.getRentalItems = function(callback) {
      if(rentalItems!=null) {
        callback(rentalItems);
      } else {
        RentalItem.list()
        .$promise
        .then(function (response) {
          //console.log(response);
          rentalItems = response.toJSON().items;
          callback(rentalItems);
        })
        .catch(function(reason){
          console.log("getRentalItems failed with the reason:"); console.log(reason);
          callback([]);
        });
      }

  }

  this.addRentalItem = function(rentalItem) {
    if(rentalItems==null)
      rentalItems = new Array();

    rentalItems.push(rentalItem);
  }

  this.updateRentalItem = function(rentalItem) {
    for(var i=0; i<rentalItems.length; i++) {
      var item = rentalItems[i];
      if(item.id == rentalItem.id) {
        rentalItems[i] = rentalItem; break;
      }
    }
  }

  this.removeRentalItem = function(rentalItemId) {
    for(var i=0; i<rentalItems.length; i++) {
      var item = rentalItems[i];
      if(item.id == rentalItemId) {
        rentalItems.splice(i,1); break;
      }
    }
  }

  this.setRentalItemImages = function(rentalItemId, images) {//console.log('CategoryService - setParentCategoryImages'); console.log('parentCategoryId = '+parentCategoryId); console.log('images:'); console.log(images);
    for(var i=0; i<rentalItems.length; i++) {
      var item = rentalItems[i];
      if(item.id == rentalItemId) {
        item.images = images; break;
      }
    }
  }
});
