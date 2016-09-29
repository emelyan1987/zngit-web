var app = angular.module('app');

app.controller('ForgotPasswordController', function($scope, Actor, ngDialog) {

    $scope.pageClass = 'page-forgot-password';

    $scope.input = {};
    $scope.submitting = false;
    $scope.submitted = false;

    $scope.spinner = {
      active: false,
      on: function () {
        this.active = true;
      },
      off: function () {
        this.active = false;
      }
    };

    $scope.submit = function() {
      $scope.spinner.on();
      console.log("Request Forgot Password Started");

      var email = $scope.input.email;

      Actor
        .resetPassword({email:email})
        .$promise
        .then(function(response){
          console.log("Actor.resetPassword succedeed with the result:");console.log(response);
          $scope.spinner.off();
          app.showInfoMessage("Requested successfully. Check your email to reset password.");
        })
        .catch(function(reason){
          console.log(reason);
          $scope.spinner.off();
          app.showErrorMessage(reason.data.error.message);
        });
    };
  });
