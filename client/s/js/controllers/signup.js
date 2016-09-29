var app = angular.module('app');

app.controller('SignupController', function($scope,$location, Actor, Shop, ngDialog) {

    $scope.pageClass = 'page-signup';

    $scope.shop = {};
    $scope.user = {};

    $scope.times = new Array();
    for(var h=0; h<24; h++) {
      for(var m=0; m<60; m+=15) {
        var time = new Date(2001,1,1,h,m,0,0);
        $scope.times.push(time.getTime());
      }
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

    $scope.deleteAddress = function() {
      $scope.shop._address = null;
    }


    $scope.register = function() {
      if(!$scope.shop._address) {
        app.showErrorMessage("Address required!");

        return;
      }

      if(!$scope.shop.account_type || !$scope.shop.account_number || !$scope.shop.routing_number || !$scope.shop.account_code) {
        app.showErrorMessage("Bank account data is required"); return;
      }

      // Check if the user email is duplicated
      Actor
        .count({where:{email:$scope.user.email}})
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
            $scope.spinner.on();

            var accountData = {
              type: $scope.shop.account_type=='C'?'corporation':'individual',
              account_number: $scope.shop.account_number,
              routing_number: $scope.shop.routing_number,
              tax_id: $scope.shop.account_code
            };
            Shop
              .validateBankAccountData({data:accountData})
              .$promise
              .then(function(response){
                var recipient = response.toJSON().recipient;
                console.log("validateBankAccount succeeded with the result:");console.log(response);

                var userEmail = $scope.user.email,
                    userPassword = $scope.user.password;

                // Create new user
                Actor
                  .create({
                    "fullname": $scope.user.fullname,
                    "email": userEmail,
                    "password": userPassword,
                    "type": 'S'
                  })
                  .$promise
                  .then(function(user) {
                    console.log("Created user:");
                    console.log(user);
                    //console.log(recipient);

                    var baseTime = new Date(2001,1,1,0,0,0,0).getTime();
                    var shopData = {
                      "name": $scope.shop.name,
                      "_address": $scope.shop._address,
                      "phone": $scope.shop.phone,
                      "email": $scope.shop.email,
                      "account_name": recipient.active_account.bank_name,
                      "account_number": $scope.shop.account_number,
                      "routing_number": $scope.shop.routing_number,
                      "account_type": $scope.shop.account_type,
                      "account_code": $scope.shop.account_code,
                      "timezone": $scope.shop.timezone,
                      "open_time_mon": $scope.shop.open_time_mon?($scope.shop.open_time_mon-baseTime)/60000:0,
                      "close_time_mon": $scope.shop.close_time_mon?($scope.shop.close_time_mon-baseTime)/60000:0,
                      "open_time_tue": $scope.shop.open_time_tue?($scope.shop.open_time_tue-baseTime)/60000:0,
                      "close_time_tue": $scope.shop.close_time_tue?($scope.shop.close_time_tue-baseTime)/60000:0,
                      "open_time_wed": $scope.shop.open_time_wed?($scope.shop.open_time_wed-baseTime)/60000:0,
                      "close_time_wed": $scope.shop.close_time_wed?($scope.shop.close_time_wed-baseTime)/60000:0,
                      "open_time_thu": $scope.shop.open_time_thu?($scope.shop.open_time_thu-baseTime)/60000:0,
                      "close_time_thu": $scope.shop.close_time_thu?($scope.shop.close_time_thu-baseTime)/60000:0,
                      "open_time_fri": $scope.shop.open_time_fri?($scope.shop.open_time_fri-baseTime)/60000:0,
                      "close_time_fri": $scope.shop.close_time_fri?($scope.shop.close_time_fri-baseTime)/60000:0,
                      "open_time_sat": $scope.shop.open_time_sat?($scope.shop.open_time_sat-baseTime)/60000:0,
                      "close_time_sat": $scope.shop.close_time_sat?($scope.shop.close_time_sat-baseTime)/60000:0,
                      "open_time_sun": $scope.shop.open_time_sun?($scope.shop.open_time_sun-baseTime)/60000:0,
                      "close_time_sun": $scope.shop.close_time_sun?($scope.shop.close_time_sun-baseTime)/60000:0,
                      "owner_id": user.id
                    };                console.log("ShopData:");console.log(shopData);

                    // Register shop information
                    Shop
                      .create(shopData)
                      .$promise
                      .then(function(shop) {
                          $scope.spinner.off();

                          console.log("Created shop:");
                          console.log(shop);

                          shop.balance = {
                            shop_id: shop.id,
                            amount: 0
                          };
                          user.shop = shop;
                          sessionStorage["currentUserType"] = user.type;
                          sessionStorage["currentUserInfo"] = JSON.stringify(user); //console.log("Session user"); console.log($.parseJSON(sessionStorage["currentUserInfo"]));

                          // Login as created user
                          Actor
                            .login({"email": userEmail, "password": userPassword})
                            .$promise
                            .then(function(token) {
                              token = token.toJSON();
                              var userType = token.user.type;

                              $scope.$emit('loginStatusChanged');
                            });
                      })
                      .catch(function(reason){
                        console.log("Create shop failed with the following reason:"); console.log(reason);
                        $scope.spinner.off();
                        app.showErrorMessage(reason.data.error.message);
                      });

                    })
                    .catch(function(reason){
                      $scope.spinner.off();
                      console.log(reason);
                      app.showErrorMessage(reason.data.error.message);
                    });
              })
              .catch(function(reason){
                console.log("validateBankAccount failed with the reason:"); console.log(reason);
                $scope.spinner.off();
                app.showErrorMessage(reason.data.error.message);
              });
          }
        })
        .catch(function(reason){
          console.log(reason);
          app.showErrorMessage(reason.data.error.message);
        });

    };
  });
