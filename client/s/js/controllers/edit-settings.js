'use strict';
var app = angular.module('app');


app.controller('EditSettingsController', function($scope, $location, Actor) {

  $scope.pageClass = 'page-edit-settings';

  var currentUserType = sessionStorage["currentUserType"];
  if(currentUserType != 'A') {
    $scope.$emit('loginStatusChanged');
    return;
  }

  $scope.$parent.selectedMenu = Menu.Administrator.Settings;

  var user = $.parseJSON(sessionStorage["currentUserInfo"]); console.log("CurrentUserInfo"); console.log(user);
  if(user == null) {
    sessionStorage["currentUserType"] = null;
    $scope.$emit('loginStatusChanged');
    return;
  }

  var userId = user.id;
  var originUserEmail = user.email;
  $scope.user = {id:user.id, fullname:user.fullname, email:user.email};



  $scope.spinner = {
    active: false,
    on: function () {
      this.active = true;
    },
    off: function () {
      this.active = false;
    }
  };


    $scope.save = function() {
      if(!$scope.user) return;
      // Check if the user email is duplicated

      var userEmail = $scope.user.email; console.log("Email="+userEmail);

      if(originUserEmail != userEmail) { console.log("User email changed!");
        Actor
          .count({where:{email:userEmail}})
          .$promise
          .then(function(data) {
            var cnt = data.toJSON().count;
            console.log(cnt);
            if(cnt>0){
              app.showErrorMessage("User email duplicated!");
              return;
            }
            else
            {
              doUpdate();
            }
          });
      } else {
        doUpdate();
      }

      function doUpdate() {
        $scope.spinner.on();
        // Update user info
        var userInfo = {
          "email": $scope.user.email
        };
        if($scope.user.password && $scope.user.password.length>0)
          userInfo.password = $scope.user.password;

        console.log("Password:"+userInfo.password);
        Actor
          .prototype$updateAttributes({id:userId}, userInfo)
          .$promise
          .then(function(user) {
            console.log("Updated user:");
            console.log(user);
            $scope.spinner.off();
          })
          .catch(function(reason){
            $scope.spinner.off();
            console.log(reason);

            app.showErrorMessage("Network connection error occurred.</br>Please try again later.");
          });
        }
    }
});
