var app = angular.module('app');


app.controller('BookDetailsController', function($scope, $routeParams, $location, LoopBackAuth, Shop, BookItem, TransactionService) {
  $scope.pageClass = 'page-book-details';

  var currentUserType = sessionStorage["currentUserType"];
  if(currentUserType == 'S') {
    $scope.title = "Dashboard";

  } else if(currentUserType == 'A') {
    $scope.title = "Transactions";
  } else {
    $scope.$emit('loginStatusChanged');
    return;
  }

  $scope.bookItem = $routeParams.bookItem;

  if(!$scope.bookItem.withdrawable && currentUserType == 'A') {
    $scope.isRefundable = true;
  }

  $scope.spinner = {
    active: false,
    on: function () {
      this.active = true;
    },
    off: function () {
      this.active = false;
    }
  };

  $scope.refund = function() {
    $scope.spinner.on();
    BookItem
      .refund({id:$scope.bookItem.id})
      .$promise
      .then(function(refund){
        $scope.spinner.off();
        console.log("Refund succeeded!"); console.log(refund);

        TransactionService.removeBookItem($scope.bookItem.id);
        $location.path('transaction');
      })
      .catch(function(reason){
        $scope.spinner.off();
        console.log("Refund failed!"); console.log(reason);
        app.showErrorMessage(reason.data.error.message);
      });
  }

  var shopId = $scope.bookItem.rentalItem.shop_id;
  console.log(shopId);
  Shop.findById({id:shopId})
    .$promise
    .then(function (response) {
      console.log("response");
      var shop = response.toJSON();

      $scope.shop = shop;
    });



});
