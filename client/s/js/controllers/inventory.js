var app = angular.module('app');



app.controller('InventoryController', function($scope, $location, $filter, InventoryService, RentalItem) {
  $scope.pageClass = 'page-inventory';

  var currentUserType = sessionStorage["currentUserType"];
  if(currentUserType == 'S') {
    $scope.$parent.selectedMenu = Menu.ShopOwner.Inventory;
  } else {
    $scope.$emit('loginStatusChanged'); return;
  }

  $scope.contentHeight = $scope.$parent.contentHeight - 70 - 45 - 22;

  $scope.spinner = {
    active: false,
    on: function () {
      this.active = true;
    },
    off: function () {
      this.active = false;
    }
  };


  $scope.load = function () {
    $scope.spinner.on();
      InventoryService.getRentalItems(function(rentalItems){
        $scope.items = rentalItems;

        $scope.spinner.off();
        //$scope.$emit('contentChanged');
      });
  }

  $scope.load();

  $scope.gotoDetails = function(item) {
      $location.path("edit-inventory").search({rentalItem: item});
  }

  $scope.gotoAdd = function() {
    $location.path("edit-inventory");
  }

});
