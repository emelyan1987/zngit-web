var app = angular.module('app');

app.controller('RootController', function($scope, $location, LoopBackAuth, Actor, CustomerService, TransactionService, InventoryService, CategoryService, ngDialog) { console.log("AccessToken="+LoopBackAuth.accessTokenId);

    $scope.getBalance = function() {
      $scope.balance = 0;
      if(sessionStorage["currentUserInfo"]) {
        var currentUserInfo = $.parseJSON(sessionStorage["currentUserInfo"]); console.log("Get Balance - CurrentUserInfo"); console.log(currentUserInfo);
        if(currentUserInfo && currentUserInfo.shop && currentUserInfo.shop.balance)
          $scope.balance = currentUserInfo.shop.balance.amount;
      }

    }
    $scope.refresh = function() {
      // initialize services
      CustomerService.init();
      TransactionService.init();
      CategoryService.init();
      InventoryService.init();

      $scope.getBalance();
      if(LoopBackAuth.accessTokenId!=null) {
        var currentUserType = $scope.currentUserType = sessionStorage["currentUserType"];
        console.log("Root Controller CurrentUserType:");console.log(currentUserType);

        if(currentUserType=='S') {
          $scope.isLogged = true;
          $location.path('transaction');
        } else if(currentUserType=='A') {
          $scope.isLogged = true;
          $location.path('categories');
        } else if(currentUserType=='C') {
          $scope.isLogged = false;
          app.showErrorMessage("You have no permission to login.");
          $location.path('login');
        } else {
          var userId = LoopBackAuth.currentUserId; console.log("No current user info"); console.log("UserID="+userId);
          Actor
            .loginByAccessToken()
            .$promise
            .then(function(response){console.log("User result"); console.log(response);
              var user = response.user;
              sessionStorage["currentUserType"] = user.type;
              sessionStorage["currentUserInfo"] = JSON.stringify(user);

              $scope.$broadcast('loginStatusChanged');
            })
            .catch(function(reason){
              console.log(reason);
              $scope.isLogged = false;
              $location.path('login');

              //app.showErrorMessage("Network connection error occurred.</br>Please try again later.");
            });
        }
      } else {
          $scope.isLogged = false;
          $location.path('login');
      }

      //$scope.$broadcast('contentChanged');
    }

    $scope.refresh();

    $scope.adjustContentHeight = function() {
      $scope.contentHeight = $(document).height()-72; console.log("Body Height="+$scope.contentHeight);
    }


    $(document).ready(function() {
        $scope.adjustContentHeight();
    });
    $(window).resize(function() {
        $scope.adjustContentHeight();
    });

    $scope.logout = function () {
      console.log("Logout requested.");
      var accessToken = LoopBackAuth.accessTokenId;
      console.log("AccessToken="+accessToken);


      sessionStorage["currentUserType"] = null;
      sessionStorage["currentUserInfo"] = null;

      $scope.submitting = true;
      Actor
        .logout()
        .$promise
        .then(function(token) {
          $scope.submitting = false;
          $scope.$broadcast('loginStatusChanged');
        })
        .catch(function(reason){
          $scope.submitting = false;
          console.log(reason);

          /*$scope.errorTitle = "Logout Failure",
          $scope.errorDescription = "Because of any reason logout was failed for now.";
          $scope.comment = "Please try again later!";

          ngDialog.open({
            template: 'error-dialog',
            controller: 'ErrorDialogController',
            className: 'ngdialog-theme-default ngdialog-theme-custom',
            scope: $scope
          });*/

          LoopBackAuth.accessTokenId = null;
          $scope.$broadcast('loginStatusChanged');
        });
    };

    $scope.signup = function() {
      $location.path("signup");
    };

    $scope.$on('loginStatusChanged', function(event) {
      console.log('loginStatusChanged event received');
      $scope.refresh();
    });

    $scope.$on('balanceChanged', function(event) {
      console.log('balanceChanged event received');
      $scope.getBalance();
    });

    $scope.$on('contentChanged', function(event) { console.log('contentChanged broadcast received');
      $scope.adjustContentHeight();
    });
});
