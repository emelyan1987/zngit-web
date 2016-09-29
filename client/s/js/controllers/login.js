var app = angular.module('app');

app.controller('LoginController', function($scope, $location, Actor, LoopBackAuth, ngDialog) {

    $scope.pageClass = 'page-login';

    $scope.email = "";
    $scope.password = "";


    $scope.login = function() {
      console.log("Request Login Started");
      $scope.submitting = true;

      var email = $scope.email,
          password = $scope.password;

      console.log("Email="+email+",Password="+password);
      Actor
        .login({"email": email, "password": password})
        .$promise
        .then(function(token) {
          token = token.toJSON();

          console.log("Login completed-TOken");console.log(token);

          var userType = token.user.type;
          sessionStorage["currentUserType"] = userType;

          Actor
            .findById({id:token.userId, filter:{include:{'shop':'balance'}}})
            .$promise
            .then(function(user){
              $scope.submitting = false;
              console.log("Get User Result"); console.log(user);
              sessionStorage["currentUserInfo"] = JSON.stringify(user); //console.log("Session user"); console.log($.parseJSON(sessionStorage["currentUserInfo"]));
              
              $scope.$emit('loginStatusChanged');
            });

        })
        .catch(function(reason){
          $scope.submitting = false;
          console.log(reason);

          bootbox.dialog({
            title: "Error",
            message: "Could not identify user account.</br>Please try again with correct email and password.",
            buttons: {
              success: {
                label: "OK",
                callback: function() {

                }
              }
            }
          });
        });
    };

    $scope.gotoForgotPassword = function() {
      $location.path("forgot-password");
    }
  });
