'use strict';
var app = angular.module('app');


app.controller('EditParentCategoryController', function($window, $scope, $routeParams, $location, CategoryService, ParentCategory, Container, uuid, FileUploader) {

  $scope.pageClass = 'page-edit-parent-category';

  console.log('EditParentCategoryController');
  console.log($routeParams.category);
  $scope.category = $routeParams.category;
  if(!$scope.category)
    $scope.category = {};


  $scope.isNewCategory = $scope.category==null||$.isEmptyObject($scope.category);
  console.log("Scope:");

  $scope.spinner = {
    active: false,
    on: function () {
      this.active = true;
    },
    off: function () {
      this.active = false;
    }
  };


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
        if(this.width!=705 && this.height!=433) {
          app.showErrorMessage("The image size is 705x433.");
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
      if(response && response.result && response.result.files) {
        var file = response.result.files.file[0];
        $scope.images.push("/api/containers/"+file.container+"/download/"+file.name);
        //$scope.$broadcast('uploadCompleted', item);
      }
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

    if($scope.category && $scope.category.container) {

      Container
        .getContainer({container:$scope.category.container})
        .$promise
        .then(function(response){
          console.log("Container exists");
          $scope.setUploaderUrl($scope.category.container);

          console.log("Category To Edit"); console.log($scope.category);
          if($scope.category.images!=null) {
            for(var i=0; i<$scope.category.images.length; i++) {
              $scope.images.push($scope.category.images[i].url);
            }
          }
        })
        .catch(function(reason){
          var container = "parent-category-container-" + uuid.new();
          Container
            .createContainer({name:container})
            .$promise
            .then(function(response){
              console.log("Created container:"+response.name); console.log($scope.category);
              $scope.category.container = response.name;

              $scope.setUploaderUrl($scope.category.container);
            });
        });


    } else {
      var container = "parent-category-container-" + uuid.new();
      Container
        .createContainer({name:container})
        .$promise
        .then(function(response){
          console.log("Created container:"+response.name); console.log($scope.category);
          $scope.category.container = response.name;

          $scope.setUploaderUrl($scope.category.container);
        });
    }

    $scope.removeImage = function(image) {
      for(var i=0; i<$scope.images.length; i++) {
        if(image == $scope.images[i]) $scope.images.splice(i,1);
      }
    }

    $scope.save = function() {
      console.log("Inputed Category");
      console.log($scope.category);
      $scope.spinner.on();

      var category = $scope.category;

      if(category.id)
      {
        ParentCategory
          .upsert(category)
          .$promise
          .then(function(response){
            console.log("Updated ParentCategory");
            console.log(response);
            CategoryService.updateParentCategory(response);
            var categoryId = response.id;

            ParentCategory.images
              .destroyAll({id:categoryId})
              .$promise
              .then(function(response){ console.log("DestroyImages REsponse");console.log(response);

                if($scope.images.length>0) {

                  var images = new Array();
                  for(var i=0; i<$scope.images.length; i++) {
                    var image = {};
                    image.url = $scope.images[i];

                    images.push(image);
                  }

                  ParentCategory.images
                    .createMany({id:categoryId}, images)
                    .$promise
                    .then(function(response){
                      console.log("Created Image Result");
                      console.log(response);

                      CategoryService.setParentCategoryImages(categoryId, response);
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
        ParentCategory
          .create(category)
          .$promise
          .then(function(response){
            console.log("Created ParentCategory");
            console.log(response);

            CategoryService.addParentCategory(response);
            var categoryId = response.id;

            if($scope.images.length>0) {

              var images = new Array();
              for(var i=0; i<$scope.images.length; i++) {
                var image = {};
                image.url = $scope.images[i];
                //image.target_type = "ParentCategory";
                //image.target_id = categoryId;

                images.push(image);
              }
              ParentCategory.images
                .createMany({id:categoryId}, images)
                .$promise
                .then(function(response){
                  console.log("Created Image Result");
                  console.log(response);

                  CategoryService.setParentCategoryImages(categoryId, response);
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
      if(!$scope.category || !$scope.category.id) return;
      $scope.spinner.on();

      var category = $scope.category;

      category.is_deleted = true;
      ParentCategory
        .upsert(category)
        .$promise
        .then(function(response){
          console.log("Delete ParentCategory Response Result");
          console.log(response);

          CategoryService.removeParentCategory(category.id);
          $scope.$broadcast('saveCompleted');

        })
        .catch(function(reason){
          console.log(reason);
          $scope.$broadcast('saveCompleted');
          app.showErrorMessage(reason.data.error.message);
        });
    }
    $scope.$on('saveCompleted', function(event) {
      $scope.spinner.off();

      $location.path('categories');
    });
});
