var app = angular.module('app');

app.controller('CustomerController', function($scope, $location, $http, $filter, CustomerService, Actor, LoopBackAuth, uiGridConstants) {
  $scope.pageClass = 'page-customers';

  var currentUserType = sessionStorage["currentUserType"];
  if(currentUserType == 'S') {
    $scope.$parent.selectedMenu = Menu.ShopOwner.Customers;
    $scope.title = "Customers";
  } else if(currentUserType == 'A') {
    $scope.$parent.selectedMenu = Menu.Administrator.Users;
    $scope.title = "Users";
  } else {
    $scope.$emit('loginStatusChanged');
    return;
  }
  console.log("SelectedMenu:"+$scope.$parent.selectedMenu);

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
          {field: 'fullname', displayName: 'NAME', enableColumnMenu: false, maxWidth: 130},
          {field: 'email', displayName:'CUSTOMER EMAIL', enableColumnMenu: false},
          {field: 'transaction_time', displayName: 'LAST TRANSACTION DATE', enableColumnMenu: false, cellFilter: 'dateFilterWithSeconds:\'MMM d yyyy\'', visible: !isResponsive},
          {field: 'transaction_id', displayName: 'TRANSACTION ID', enableColumnMenu: false, cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.transaction_id?row.entity.transaction_id:""}}</div>', visible: !isResponsive},
          {field: 'type', displayName: 'TYPE', enableColumnMenu: false, cellTemplate: '<div class="ui-grid-cell-contents" ng-switch on="row.entity.type"><span ng-switch-when="S">Store</span><span ng-switch-when="C">User</span></div>', visible: currentUserType=='A'&&!isResponsive},
          {field: 'type', displayName: 'TYPE', enableColumnMenu: false, enableSorting: false, cellTemplate: '<div class="zn-ui-grid-cell-content" ng-switch on="row.entity.type"><span ng-switch-when="S"><input type="button" class="zn-button-submit-small zn-width-100" value="LOG IN AS THIS USER" ng-click="grid.appScope.loginAsThisUser(row)"/></span></div>', visible: currentUserType=='A'&&!isResponsive}
      ],
      rowTemplate: '<div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.uid" class="ui-grid-cell" ng-class="col.colIndex()" ui-grid-cell></div>',
  };
  $scope.gridOptions.enableHorizontalScrollbar = uiGridConstants.scrollbars.NEVER;
  $scope.gridOptions.enableVerticalScrollbar = uiGridConstants.scrollbars.NEVER;


  $scope.load = function () {
    $scope.spinner.on();
      CustomerService.getCustomers(function(customers){
        $scope.customers = $scope.gridOptions.data = customers;

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


  $scope.refreshData = function() {
      $scope.gridOptions.data = $filter('filter')($scope.customers, $scope.searchText, undefined);
  };

  $scope.loginAsThisUser = function(row) {
    $scope.spinner.on();
    Actor
      .prototype$__get__accessTokens({id:row.entity.id, filter:{order:'created DESC',limit:1}})
      .$promise
      .then(function(accessTokens){
        console.log('prototype$__get__accessTokens response'); console.log(accessTokens);
        if(!accessTokens || accessTokens.length==0) {
          $scope.spinner.off();
          app.showErrorMessage("Could not get access token of this user");
          return;
        }
        var accessToken = accessTokens[0].toJSON();

        LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
        LoopBackAuth.save();

        // $http
        //   .post('/api/Actors/loginByAccessToken?access_token='+accessToken.id)
        //   .then(function(response){
        //     $scope.spinner.off();
        //     console.log("POST loginByAccessToken Response:"); console.log(response);
        //     var user = response.data.user;
        //     sessionStorage["currentUserType"] = user.type;
        //     sessionStorage["currentUserInfo"] = JSON.stringify(user);
        //
        //     $scope.$emit('loginStatusChanged');
        //   })
        Actor
          .loginByAccessToken()
          .$promise
          .then(function(response){console.log("User result"); console.log(response);
            var user = response.user;
            sessionStorage["currentUserType"] = user.type;
            sessionStorage["currentUserInfo"] = JSON.stringify(user);

            $scope.$emit('loginStatusChanged');
          })
          .catch(function(reason){
            console.log(reason);
            $scope.isLogged = false;
            $location.path('login');

            //app.showErrorMessage("Network connection error occurred.</br>Please try again later.");
          });
      })
      .catch(function(reason){
        console.log(reason);
        $scope.spinner.off();
      });
  }
});
