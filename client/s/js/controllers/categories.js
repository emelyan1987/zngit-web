var app = angular.module('app');



app.controller('CategoriesController', function($scope, $location, CategoryService, ParentCategory, SubCategory) {
  $scope.pageClass = 'page-categories';

  var currentUserType = sessionStorage["currentUserType"];
  if(currentUserType == 'A') {
    $scope.$parent.selectedMenu = Menu.Administrator.Categories;
  } else {
    $scope.$emit('loginStatusChanged');
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

  $scope.parentCategories = new Array();
  $scope.load = function () {
    $scope.spinner.on();
    CategoryService.getParentCategories(function(categories) {
      $scope.parentCategories = categories;
      $scope.spinner.off();
    })
  }

  $scope.load();


  $scope.editParentCategory = function(category) {
    if(category)
    {
      console.log('With params');
      $location.path("edit-parent-category").search({category: category});
    } else {
      console.log('Without params');
      $location.path("edit-parent-category").search({});
    }
  }

  $scope.selectParentCategory = function(category) {
    $scope.selectedParentCategory = category;
  }

  $scope.editSubCategory = function(category) {

    if(category)
    {
      $location.path("edit-sub-category").search({category: category});
    } else {
      var parentCategoryId = $scope.selectedParentCategory.id;
      $location.path("edit-sub-category").search({parent_id:parentCategoryId});
    }
  }

});
