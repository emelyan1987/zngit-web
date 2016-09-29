'use strict';
var app = angular.module('app');


app.controller('EditInventoryController', function($window, $scope, $routeParams, $location, InventoryService, CategoryService, RentalItem, ParentCategory, SubCategory, Container, uuid, FileUploader) {

  console.log('EditInventoryController');
  $scope.pageClass = 'page-edit-inventory';


  $scope.rentalItem = $routeParams.rentalItem;
  if(!$scope.rentalItem)
    $scope.rentalItem = {};

  $scope.isNewInventory = $scope.rentalItem==null||$.isEmptyObject($scope.rentalItem);

  $scope.parentCategories = new Array();

  $scope.spinner = {
    active: false,
    on: function () {
      this.active = true;
    },
    off: function () {
      this.active = false;
    }
  };

  $scope.selectParentCategory = function() { //console.log($scope.rentalItem.selectedParentCategory);
    $scope.subCategories = new Array();

    var selectedParentCategory = $scope.rentalItem.selectedParentCategory; //console.log("SelectedParentCategory"); console.log(selectedParentCategory);
    if(selectedParentCategory && selectedParentCategory.subCategories) {
      for(var i=0; i<selectedParentCategory.subCategories.length; i++) {
        var subCategory = selectedParentCategory.subCategories[i];
        $scope.subCategories.push(subCategory);
      }
    }
  }

  CategoryService.getParentCategories(function(parentCategories){
    console.log("ParentCategories");

    console.log(parentCategories);
    $scope.parentCategories = parentCategories;

    //console.log($scope.parentCategories);
    if($scope.rentalItem!=null && $scope.rentalItem.category_id) {
      var bFind = false;
      for(var i=0; i<$scope.parentCategories.length; i++) {
        var parentCategory = $scope.parentCategories[i];

        if(parentCategory.subCategories!=null) {
          for(var j=0; j<parentCategory.subCategories.length; j++) {
            var subCategory = parentCategory.subCategories[j];
            if(subCategory.id == $scope.rentalItem.category_id) {
              $scope.rentalItem.selectedParentCategory = parentCategory;
              //$scope.selectedParentCategoryId = parentCategory.id;
              $scope.selectParentCategory();
              $scope.rentalItem.category_id = subCategory.id;
              //$scope.selectedSubCategoryId = subCategory.id;
              bFind = true;break;
            }
          }
          if(bFind) break;
        }
      }
    }
  });

    $scope.images = new Array();

    var uploader = $scope.uploader = new FileUploader({
      scope: $scope,                          // to automatically update the html. Default: $rootScope
      formData: [
        { key: 'value' }
      ]
    });
    // ADDING FILTERS
    uploader.filters.push({
      name: 'imageFilter',
      fn: function(item /*{File|FileLikeObject}*/, options) {
          var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
          return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
      }
    });

    // REGISTER HANDLERS
    // --------------------
    uploader.onAfterAddingFile = function(item) {
      //console.info('After adding a file', item);

      var item = uploader.queue[uploader.queue.length-1];
      var file = item._file;

      if(!angular.isObject(file) || !file instanceof $window.File) {console.log("This is note file");
        app.showErrorMessage("This is not file");
        return;
      }

      console.log("FILE:");console.log(file);
      var type =  '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
      if('|jpg|png|jpeg|bmp|gif|'.indexOf(type) == -1) {
        app.showErrorMessage("This is not image");
        return;
      }
      var reader = new FileReader();

      reader.onload = onLoadFile;
      reader.readAsDataURL(file);

      function onLoadFile(event) {
          var img = new Image();
          img.onload = onLoadImage;
          img.src = event.target.result;
      }
      function onLoadImage() {
        console.log(this.width + "x" + this.height);
        if(this.width!=705 && this.height!=514) {
          app.showErrorMessage("The image size is 705x514.");
          //return;
        }
        item.upload();
      }
    };
    // --------------------
    uploader.onAfterAddingAll = function(items) {
      //console.info('After adding all files', items);
    };
    // --------------------
    uploader.onWhenAddingFileFailed = function(item, filter, options) {
      //console.info('When adding a file failed', item);
    };
    // --------------------
    uploader.onBeforeUploadItem = function(item) {
      //console.info('Before upload', item);
    };
    // --------------------
    uploader.onProgressItem = function(item, progress) {
      //console.info('Progress: ' + progress, item);
    };
    // --------------------
    uploader.onProgressAll = function(progress) {
    //  console.info('Total progress: ' + progress);
    };
    // --------------------
    uploader.onSuccessItem = function(item, response, status, headers) {
      console.info('Success', response, status, headers);

      var file = response.result.files.file[0];
      $scope.images.push("/api/containers/"+file.container+"/download/"+file.name);
      //$scope.$broadcast('uploadCompleted', item);
    };
    // --------------------
    uploader.onErrorItem = function(item, response, status, headers) {
      //console.info('Error', response, status, headers);
    };
    // --------------------
    uploader.onCancelItem = function(item, response, status, headers) {
      //console.info('Cancel', response, status);
    };
    // --------------------
    uploader.onCompleteItem = function(item, response, status, headers) {
      //console.info('Complete', response, status, headers);
    };
    // --------------------
    uploader.onCompleteAll = function() {
      //console.info('Complete all');
    };
    // --------------------

    $scope.setUploaderUrl = function(container) {
      $scope.uploader.url = '/api/containers/'+container+'/upload';
    }

    if($scope.rentalItem && $scope.rentalItem.container) {

      Container
        .getContainer({container:$scope.rentalItem.container})
        .$promise
        .then(function(response){
          console.log("Container exists");
          $scope.setUploaderUrl($scope.rentalItem.container);

          if($scope.rentalItem.images) {
            for(var i=0; i<$scope.rentalItem.images.length; i++) {
              $scope.images.push($scope.rentalItem.images[i].url);
            }
          }
        })
        .catch(function(reason){
          var container = "rental-item-container-" + uuid.new();
          Container
            .createContainer({name:container})
            .$promise
            .then(function(response){
              $scope.rentalItem.container = response.name;

              $scope.setUploaderUrl($scope.rentalItem.container);
            });
        });


    } else {
      var container = "rental-item-container-" + uuid.new();
      Container
        .createContainer({name:container})
        .$promise
        .then(function(response){
          $scope.rentalItem.container = response.name;

          $scope.setUploaderUrl($scope.rentalItem.container);
        });
    }

    $scope.removeImage = function(image) {
      for(var i=0; i<$scope.images.length; i++) {
        if(image == $scope.images[i]) $scope.images.splice(i,1);
      }
    }

    $scope.save = function() {
      //console.log("Inputed RentalItem");
      //console.log(rentalItem);
      $scope.spinner.on();

      var rentalItem = $scope.rentalItem;

      if(rentalItem.id)
      {
        RentalItem
          .upsert(rentalItem)
          .$promise
          .then(function(response){
            console.log("Created RentalItem");
            console.log(response);

            InventoryService.updateRentalItem(response);
            var rentalItemId = response.id;

            RentalItem.images
              .destroyAll({id:rentalItemId})
              .$promise
              .then(function(response){
                if($scope.images.length>0) {

                  var images = new Array();
                  for(var i=0; i<$scope.images.length; i++) {
                    var image = {};
                    image.url = $scope.images[i];

                    images.push(image);
                  }

                  RentalItem.images
                    .createMany({id:rentalItemId}, images)
                    .$promise
                    .then(function(response){
                      console.log("Created Image Result");
                      console.log(response);

                      InventoryService.setRentalItemImages(rentalItemId, response);
                      $scope.$broadcast('saveCompleted');
                    })
                    .catch(function(reason){
                      console.log(reason);
                      $scope.$broadcast('saveCompleted');
                      app.showErrorMessage(reason.data.error.message);
                    });

                } else {
                  $scope.$broadcast('saveCompleted');
                }
              })
              .catch(function(reason){
                console.log(reason);
                $scope.$broadcast('saveCompleted');
                app.showErrorMessage(reason.data.error.message);
              });
          })
          .catch(function(reason){
            console.log(reason);
            $scope.$broadcast('saveCompleted');
            app.showErrorMessage(reason.data.error.message);
          });
      } else {
        RentalItem
          .create(rentalItem)
          .$promise
          .then(function(response){
            //console.log("Created RentalItem");
            //console.log(response);
            InventoryService.addRentalItem(response);
            var rentalItemId = response.id;

            if($scope.images.length>0) {

              var images = new Array();
              for(var i=0; i<$scope.images.length; i++) {
                var image = {};
                image.url = $scope.images[i];
                //image.target_type = "RentalItem";
                //image.target_id = rentalItemId;

                images.push(image);
              }
              RentalItem.images
                .createMany({id:rentalItemId}, images)
                .$promise
                .then(function(response){
                  console.log("Created Image Result");
                  console.log(response);

                  InventoryService.setRentalItemImages(rentalItemId, response);
                  $scope.$broadcast('saveCompleted');
                })
                .catch(function(reason){
                  console.log(reason);
                  $scope.$broadcast('saveCompleted');
                  app.showErrorMessage(reason.data.error.message);
                });
            } else {
              $scope.$broadcast('saveCompleted');
            }
          })
          .catch(function(reason){
            console.log(reason);
            $scope.$broadcast('saveCompleted');
            app.showErrorMessage(reason.data.error.message);
          });
      }

    }

    $scope.remove = function() {
      if(!$scope.rentalItem || !$scope.rentalItem.id) return;
      $scope.spinner.on();

      var rentalItemId = $scope.rentalItem.id;
      RentalItem
        .deleteById({id:rentalItemId})
        .$promise
        .then(function(response){
          console.log("Delete RentalItem Response Result");
          console.log(response);

          InventoryService.removeRentalItem(rentalItemId);
          $scope.$broadcast('saveCompleted');

          /*RentalItem.images
            .destroyAll({id:rentalItemId})
            .$promise
            .then(function(response){
              var container = $scope.rentalItem.container;
              Container
                .destroyContainer({name:container})
                .$promise
                .then(function(response){
                  $scope.spinner.off();

                  $location.path('inventory');
                });
            });*/


        })
        .catch(function(reason){
          console.log(reason);
          $scope.$broadcast('saveCompleted');
          app.showErrorMessage(reason.data.error.message);
        });
    }
    $scope.$on('saveCompleted', function(event) {
      $scope.spinner.off();

      $location.path('inventory');
    });
});
