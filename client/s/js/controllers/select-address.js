var app = angular.module('app');

app.controller('SelectAddressController', function ($scope, $http, ngDialog) {

  $scope.selectAddress = function(index) {
    var address = $scope.searchedAddresses[index];

    $scope.$parent.$parent.shop._address = address;

    ngDialog.closeAll();
  }

});
