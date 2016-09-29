var Menu = {
  ShopOwner: {
    Dashboard : "Menu-S-Dashboard",
    Inventory : "Menu-S-Inventory",
    Customers : "Menu-S-Customers",
    Balance : "Menu-S-Balance",
    Settings : "Menu-S-Settings"
  },
  Administrator: {
    Categories: "Menu-A-Categories",
    Transactions: "Menu-A-Transactions",
    Users: "Menu-A-Users",
    Settings: "Menu-A-Settings",
  }
};

var app = angular
  .module('app', [
    'lbServices',
    'uuidService',
    'ngRoute',
    'ngAnimate',
    'ngDialog',
    'angular-timezone-selector',
    'ui.grid',
    'ui.grid.autoResize',
    'angularFileUpload',
    'treasure-overlay-spinner',
    'ngImageCache',
    'wingify.timePicker'
  ])
  .config(function($routeProvider, $locationProvider, ImageCacheProvider) {
    $routeProvider
            .when('/login', {
              templateUrl: 'views/login.html',
              controller: 'LoginController'
            })
            .when('/forgot-password', {
              templateUrl: 'views/forgot-password.html',
              controller: 'ForgotPasswordController'
            })
            .when('/signup', {
              templateUrl: 'views/signup.html',
              controller: 'SignupController'
            })
            .when('/edit-shop', {
              templateUrl: 'views/edit-shop.html',
              controller: 'EditShopController'
            })
            .when('/edit-settings', {
              templateUrl: 'views/edit-settings.html',
              controller: 'EditSettingsController'
            })
            .when('/transaction', {
              templateUrl: 'views/transaction.html',
              controller: 'TransactionController'
            })
            .when('/book-details', {
              templateUrl: 'views/book-details.html',
              controller: 'BookDetailsController'
            })
            .when('/inventory', {
              templateUrl: 'views/inventory.html',
              controller: 'InventoryController'
            })
            .when('/edit-inventory', {
              templateUrl: 'views/edit-inventory.html',
              controller: 'EditInventoryController'
            })
            .when('/categories', {
              templateUrl: 'views/categories.html',
              controller: 'CategoriesController'
            })
            .when('/edit-parent-category', {
              templateUrl: 'views/edit-parent-category.html',
              controller: 'EditParentCategoryController'
            })
            .when('/edit-sub-category', {
              templateUrl: 'views/edit-sub-category.html',
              controller: 'EditSubCategoryController'
            })
            .when('/customers', {
              templateUrl: 'views/customers.html',
              controller: 'CustomerController'
            })
            .when('/withdraw', {
              templateUrl: 'views/withdraw.html',
              controller: 'WithdrawController'
            });

        //$locationProvider.html5Mode(true);

        ImageCacheProvider.setStorage(window.localStorage);
  });

  app.showErrorMessage = function(message) {
    bootbox.dialog({
      title: "Error",
      message: message,
      buttons: {
        success: {
          label: "OK",
          callback: function() {

          }
        }
      }
    });
  };
  app.showInfoMessage = function(message) {
    bootbox.dialog({
      title: "Info",
      message: message,
      buttons: {
        success: {
          label: "OK",
          callback: function() {

          }
        }
      }
    });
  };


  app.isResponsive = function() {
    if (document.documentElement.clientWidth < 700) {
    	return true;
    }
    return false;
  }
  /*app.directive('emailnotduplicated', function($q, Actor) {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        var usernames = ['Jim', 'John', 'Jill', 'Jackie'];
        ctrl.$asyncValidators.emailnotduplicated = function(modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) {
            // consider empty model valid
            return $q.when();
          }

          var def = $q.defer();


          console.log("MODELVALUE="+modelValue);

          Actor
            .count({ where: { email: modelValue } } )
            .$promise
            .then(function(data) {
              var cnt = data.toJSON().count;
              console.log(cnt);
              if(cnt>0){
                console.log('reject');
                def.reject();
              }
              else
              {

                console.log('resolved');
                console.log(cnt);
                def.resolve();
              }
            })
            .catch(function(reason){
              console.log(reason);
            });

          return def.promise;
        };
      }
    };
  });*/

  app.controller('ErrorDialogController', function ($scope, ngDialog) {
          $scope.ok = function () {
            ngDialog.close('ngdialog1');
          };
        });
