var app = angular.module('app');

app.controller('EditShopController', function($scope, $filter, $location, Actor, Shop) {
  console.log('EditShopController');
    $scope.pageClass = 'page-edit-shop';

    var currentUserType = sessionStorage["currentUserType"];  console.log("CurrentUserType:"+currentUserType);
    if(currentUserType != 'S') {
      $scope.$emit('loginStatusChanged');
      return;
    }

    $scope.$parent.selectedMenu = Menu.ShopOwner.Settings;

    var user = $.parseJSON(sessionStorage["currentUserInfo"]); console.log("CurrentUserInfo"); console.log(user);
    if(user == null) {
      sessionStorage["currentUserType"] = null;
      $scope.$emit('loginStatusChanged');
      return;
    }

    var userId = user.id;
    var originUserEmail = user.email;

    $scope.user = {id:user.id, fullname:user.fullname, email:user.email};


    var shop = user.shop;
    if(shop == null) {
      sessionStorage["currentUserType"] = null;
      $scope.$emit('loginStatusChanged');
      return;
    }

    $scope.times = new Array();
    for(var h=0; h<24; h++) {
      for(var m=0; m<60; m+=15) {
        var time = new Date(2001,1,1,h,m,0,0);
        $scope.times.push(time.getTime());
      }
    }

    var balance = shop.balance;

    var baseTime = new Date(2001,1,1,0,0,0,0);
    if(shop.open_time_mon) {
      $scope.monday = true;
      shop.open_time_mon = baseTime.getTime()+shop.open_time_mon*60000;
    }
    if(shop.close_time_mon) {
      $scope.monday = true;
      shop.close_time_mon =  baseTime.getTime()+shop.close_time_mon*60000;
    }

    if(shop.open_time_tue) {
      $scope.tuesday = true;
      shop.open_time_tue =  baseTime.getTime()+shop.open_time_tue*60000;
    }
    if(shop.close_time_tue) {
      $scope.tuesday = true;
      shop.close_time_tue =  baseTime.getTime()+shop.close_time_tue*60000;
    }

    if(shop.open_time_wed) {
      $scope.wednesday = true;
      shop.open_time_wed = baseTime.getTime()+shop.open_time_wed*60000;
    }
    if(shop.close_time_wed) {
      $scope.wednesday = true;
      shop.close_time_wed = baseTime.getTime()+shop.close_time_wed*60000;
    }

    if(shop.open_time_thu) {
      $scope.thursday = true;
      shop.open_time_thu = baseTime.getTime()+shop.open_time_thu*60000;
    }
    if(shop.close_time_thu) {
      $scope.thursday = true;
      shop.close_time_thu = baseTime.getTime()+shop.close_time_thu*60000;
    }

    if(shop.open_time_fri) {
      $scope.friday = true;
      shop.open_time_fri = baseTime.getTime()+shop.open_time_fri*60000;
    }
    if(shop.close_time_fri) {
      $scope.friday = true;
      shop.close_time_fri = baseTime.getTime()+shop.close_time_fri*60000;
    }

    if(shop.open_time_sat) {
      $scope.saturday = true;
      shop.open_time_sat = baseTime.getTime()+shop.open_time_sat*60000;
    }
    if(shop.close_time_sat) {
      $scope.saturday = true;
      shop.close_time_sat = baseTime.getTime()+shop.close_time_sat*60000;
    }

    if(shop.open_time_sun) {
      $scope.sunday = true;
      shop.open_time_sun = baseTime.getTime()+shop.open_time_sun*60000;
    }
    if(shop.close_time_sun) {
      $scope.sunday = true;
      shop.close_time_sun = baseTime.getTime()+shop.close_time_sun*60000;
    }
    $scope.shop = shop;

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


    $scope.save = function() { //console.log("SHop Data"); console.log($scope.shop); console.log("UserID"); console.log(user.id);
      if(!$scope.shop._address) {
        app.showErrorMessage("Address required!");

        return;
      }

      // Validate account Data
      if(!$scope.shop.account_type || !$scope.shop.account_number || !$scope.shop.routing_number || !$scope.shop.account_code) {
        app.showErrorMessage("Bank account data is required"); return;
      }

      // Check if the user email is duplicated
      var userEmail = $scope.user.email,
          userPassword = $scope.user.password;

      if(originUserEmail != userEmail) { console.log("User email changed!");
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
              doUpdate();
            }
          });
      } else {
        doUpdate();
      }

      function doUpdate() {
        $scope.spinner.on();

        var accountData = {
          type: $scope.shop.account_type=='C'?'corporation':'individual',
          account_number: $scope.shop.account_number,
          routing_number: $scope.shop.routing_number,
          tax_id: $scope.shop.account_code
        };

        $scope.spinner.on();
        Shop
          .validateBankAccountData({data:accountData})
          .$promise
          .then(function(response){
            console.log("validateBankAccount succeeded with the result:");console.log(response);

            var recipient = response.toJSON().recipient;

            // Update user info
            var userInfo = {
              "fullname": $scope.user.fullname,
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
                  "close_time_sun": $scope.shop.close_time_sun?($scope.shop.close_time_sun-baseTime)/60000:0
                };
                console.log("ShopData:");console.log(shopData);

                // Register shop information
                Shop
                  .prototype$updateAttributes({id:$scope.shop.id}, shopData)
                  .$promise
                  .then(function(shop) {
                    $scope.spinner.off();

                    console.log("Updated shop:");
                    console.log(shop);
                    shop.balance = balance;
                    user.shop = shop;
                    sessionStorage["currentUserInfo"] = JSON.stringify(user); //console.log("Session user"); console.log($.parseJSON(sessionStorage["currentUserInfo"]));

                  })
                  .catch(function(reason){
                    console.log("Update shop failed with the following reason:"); console.log(reason);
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
    };
  });
