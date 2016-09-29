var app = angular.module('app');



app.controller('WithdrawController', function($scope, $location, $filter, WithdrawService, Withdraw, uiGridConstants) {
  $scope.pageClass = 'page-withdraw';

  var currentUserType = sessionStorage["currentUserType"]; console.log("Transaction Controller CurrentUserType="+currentUserType);
  if(currentUserType != 'S') {
    $scope.$emit('loginStatusChanged');
    return;
  }

  $scope.$parent.selectedMenu = Menu.ShopOwner.Balance;

  $scope.shop = $.parseJSON(sessionStorage['currentUserInfo']).shop;

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
      enableScrollbars: false,
      columnDefs: [
          {field: 'created_time', displayName: 'DATE', enableColumnMenu: false, cellFilter: 'dateFilterWithSeconds:\'MMM d yyyy\''},
          {field: 'amount', displayName: 'WITHDRAWAL AMOUNT', enableColumnMenu: false, cellFilter: 'currency'},
          {field: 'destination', displayName: 'PAYMENT DESTINATION', enableColumnMenu: false, width:340, visible: !isResponsive}
      ],
      rowTemplate: '<div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.uid" class="ui-grid-cell" ng-class="col.colIndex()" ui-grid-cell></div>',
  };
  $scope.gridOptions.enableHorizontalScrollbar = uiGridConstants.scrollbars.NEVER;
  $scope.gridOptions.enableVerticalScrollbar = uiGridConstants.scrollbars.NEVER;

  $scope.load = function (reload) {
    $scope.spinner.on();
      WithdrawService.getWithdraws(reload, function(items){
        $scope.gridOptions.data = items;
        console.log("GridData"); console.log(items);

        $scope.spinner.off();
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


  $scope.withdraw = function() {
    var balance = $scope.shop.balance.amount;
    if(balance==0) return;
    console.log("Balance"); console.log(balance);

    bootbox.dialog({
                title: "Input withdrawal amount",
                message:
                  '<div align="center">' +
                  '<table class="zn-table">' +
                  '<tr>' +
                    '<th style="width:100px;">Amount</th>' +
                    '<td style="width:150px;"><input type="number" id="amount" class="form-control" name="amount" step="0.1" min="0" max="'+balance+'" value="'+balance+'" /></td>' +
                  '</tr>' +
                  '</table>' +
                  '</div>',
                buttons: {
                    ok: {
                        label: "Ok",
                        className: "btn-success",
                        callback: function () {
                            var amount = $('#amount').val();

                            amount = amount>balance?balance:amount;

                            if(amount>0) {
                              $scope.spinner.on();
                              Withdraw
                                .withdraw({amount:amount})
                                .$promise
                                .then(function(response){
                                  $scope.spinner.off();
                                  console.log(response);

                                  if(!response.withdraw) {
                                    app.showErrorMessage("Error occurred"); return;
                                  }

                                  $scope.load(true);

                                  var currentUser = $.parseJSON(sessionStorage["currentUserInfo"]);
                                  $scope.shop.balance.amount = currentUser.shop.balance.amount -= amount;
                                  sessionStorage["currentUserInfo"] = JSON.stringify(currentUser);
                                  $scope.$emit('balanceChanged');
                                })
                                .catch(function(reason) {
                                  $scope.spinner.off();
                                  console.log("Withdraw failed with the following reason:"); console.log(reason);
                                  app.showErrorMessage(reason.data.error.message);
                                });
                            }
                        }
                    },
                    cancel: {
                        label: "Cancel",
                        className: "btn-cancel",
                        callback: function () {

                        }
                    }
                }
            }
        );
    return;


  }
});
