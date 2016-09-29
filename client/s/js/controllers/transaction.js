var app = angular.module('app');



app.controller('TransactionController', function($scope, $location, $filter, LoopBackAuth, TransactionService, BookItem,  ngDialog, uiGridConstants) {
  $scope.pageClass = 'page-transaction';

  var currentUserType = sessionStorage["currentUserType"]; console.log("Transaction Controller CurrentUserType="+currentUserType);
  if(currentUserType == 'S') {
    $scope.$parent.selectedMenu = Menu.ShopOwner.Dashboard;
    $scope.title = "Dashboard";
  } else if(currentUserType == 'A') {
    $scope.$parent.selectedMenu = Menu.Administrator.Transactions;
    $scope.title = "Transactions";
  } else {
    $scope.$emit('loginStatusChanged');
    return;
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

  var isResponsive = app.isResponsive();
  $scope.gridOptions = {
      enableRowSelection: true,
      showSelectionCheckbox: false,
      checkboxCellTemplate: undefined, // no more in v3.0.+
      checkboxHeaderTemplate: undefined, // no more in v3.0.+

      columnDefs: [
          {field: 'renter.fullname', displayName: 'NAME', enableColumnMenu: false},
          {field: 'renter.email', displayName:'CUSTOMER EMAIL', enableColumnMenu: false},
          {field: 'created_time', displayName: 'DATE RENTED', enableColumnMenu: false, cellFilter: 'dateFilterWithSeconds:\'MMM d yyyy\'', visible:!isResponsive},
          {field: 'pickup_time', displayName: 'PICKUP TIME', enableColumnMenu: false, cellTemplate: '<div class="ui-grid-cell-contents">{{grid.appScope.pickupTimeFormat(row)}}</div>', visible: currentUserType!='A'&&!isResponsive},
          {field: 'id', displayName: 'TRANSACTION ID', enableColumnMenu: false, visible: currentUserType=='A'&&!isResponsive},
          {field: 'quantity', displayName: 'ITEMS RENTED', enableColumnMenu: false, cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.quantity}} x {{row.entity.rentalItem.name}}</div>', visible:!isResponsive},
          {field: 'amount', displayName: 'AMOUNT', enableColumnMenu: false, cellFilter: 'currency', visible:!isResponsive},
          {field: 'rentalItem.shop.name', displayName: 'SHOP', enableColumnMenu: false, visible: currentUserType=='A'&&!isResponsive}
      ],
      rowTemplate: '<div ng-click="grid.appScope.gotoDetails(row)" ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.uid" class="ui-grid-cell" ng-class="col.colIndex()" ui-grid-cell></div>',
  };

  $scope.gridOptions.enableHorizontalScrollbar = uiGridConstants.scrollbars.NEVER;
  $scope.gridOptions.enableVerticalScrollbar = uiGridConstants.scrollbars.NEVER;


  $scope.load = function () {
    $scope.spinner.on();
      TransactionService.getBookItems(function(bookItems){
        $scope.gridOptions.data = bookItems;
        console.log("GridData"); console.log(bookItems);

        $scope.spinner.off();

        //$scope.$emit('contentChanged');
      });
  }

  $scope.load();

  $scope.getGridHeight = function() {
     var rowHeight = 45; // your row height
     var headerHeight = 45; // your header height
     var height = $scope.gridOptions.data.length * rowHeight + headerHeight + 30;
     return {
        height: height + "px"
     };
  };

  $scope.gotoDetails = function(row) {
      $location.path("book-details").search({bookItem: row.entity});
  }
  // $scope.gridOptions.onRegisterApi = function(gridApi){
  //   //set gridApi on scope
  //   $scope.gridApi = gridApi;
  //   gridApi.selection.on.rowSelectionChanged($scope,function(row){
  //     var msg = 'row selected ' + row.isSelected;
  //     console.log(msg);
  //   });
  // };

  $scope.pickupTimeFormat = function( row ) {
    var time = new Date(row.entity.pickup_date).getTime() + row.entity.pickup_time*60000;
    return $filter('date')(time, 'h:m a on M/d/yyyy');
  };

});
