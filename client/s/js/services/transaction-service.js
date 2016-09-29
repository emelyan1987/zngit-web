module.service('TransactionService', function(BookItem) {

  var bookItems = null;

  this.init = function() {
    bookItems = null;
  }
  this.getBookItems = function(callback) {
      if(bookItems!=null) { //console.log("Cached BookItems:"); console.log(bookItems);
        callback(bookItems);
      } else {
        BookItem.list()
        .$promise
        .then(function (response) {
          bookItems = response.toJSON().items;
          callback(bookItems);
        })
        .catch(function(reason){
          console.log("getBookItems failed with the reason:"); console.log(reason);
          callback([]);
        });
      }
  }

  this.removeBookItem = function(bookItemId) {
    for(var i=0; i<bookItems.length; i++) {
      var bookItem = bookItems[i];
      if(bookItem.id == bookItemId) {
        bookItems.splice(i,1); break;
      }
    }
  }
});
