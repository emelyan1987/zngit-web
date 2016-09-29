module.service('ShopService', function(Shop) {

  var shop = null;
  this.init = function() {
    shop = null;
  }

  this.getShop = function(callback) {
      if(shop!=null) {
        callback(shop);
      } else {
        Shop
          .find({filter:{include:['images',{'subCategories':'images'}]}})
          .$promise
          .then(function(response) {
            console.log("ParentCategories");

            console.log(response);
            for(var i=0; i<response.length; i++) {
              var category = response[i].toJSON();
              parentCategories.push(category);
            }

            callback(parentCategories);
          })
          .catch(function(reason){
            console.log("getShop failed with the reason:"); console.log(reason);
            callback([]);
          });
      }

  }

  this.addParentCategory = function(parentCategory) {
    if(parentCategories==null)
      parentCategories = new Array();

    parentCategories.push(parentCategory);
  }

  this.updateParentCategory = function(parentCategory) {
    for(var i=0; i<parentCategories.length; i++) {
      var category = parentCategories[i];
      if(category.id == parentCategory.id) {
        parentCategories[i] = parentCategory; break;
      }
    }
  }

  this.removeParentCategory = function(parentCategoryId) {
    for(var i=0; i<parentCategories.length; i++) {
      var category = parentCategories[i];
      if(category.id == parentCategoryId) {
        parentCategories.splice(i,1); break;
      }
    }
  }

  this.setParentCategoryImages = function(parentCategoryId, images) {//console.log('CategoryService - setParentCategoryImages'); console.log('parentCategoryId = '+parentCategoryId); console.log('images:'); console.log(images);
    for(var i=0; i<parentCategories.length; i++) {
      var category = parentCategories[i];
      if(category.id == parentCategoryId) {
        category.images = images; break;
      }
    }
  }

  this.addSubCategory = function(subCategory) { //console.log("CategoryService - addSubCategory"); console.log('subCategory'); console.log(subCategory);
    //console.log("parentCategories"); console.log(parentCategories);
    for(var i=0; i<parentCategories.length; i++) {
      var parentCategory = parentCategories[i]; //console.log("parentCategory"); console.log(parentCategory);
      if(parentCategory.id == subCategory.parent_id) {
        parentCategory.subCategories.push(subCategory); break;
      }
    }

    //console.log("Changed Parent Categories"); console.log(parentCategories);
  }

  this.updateSubCategory = function(subCategory) {
    var bFound = false;
    for(var i=0; i<parentCategories.length; i++) {
      var parentCategory = parentCategories[i];
      if(parentCategory.id == subCategory.parent_id) {
        var subCategories = parentCategory.subCategories
        for(var j=0; j<subCategories.length; j++) {
          var category = subCategories[j];
          if(category.id == subCategory.id) {
            parentCategories[i].subCategories[j] = subCategory; bFound = true; break;
          }
        }
        if(bFound) break;
      }
    }
  }

  this.removeSubCategory = function(subCategoryId) {
    var bFound = false;
    for(var i=0; i<parentCategories.length; i++) {
      var parentCategory = parentCategories[i];

      var subCategories = parentCategory.subCategories
      for(var j=0; j<subCategories.length; j++) {
        var category = subCategories[j];
        if(category.id == subCategoryId) {
          parentCategories[i].subCategories.splice(j,1); bFound = true; break;
        }
      }
      if(bFound) break;
    }
  }

  this.setSubCategoryImages = function(subCategoryId, images) { //console.log("CategoryService - setSubCategoryImages"); console.log("subCategoryId = "+subCategoryId); console.log("Images"); console.log(images);
    var bFound = false;
    for(var i=0; i<parentCategories.length; i++) {
      var parentCategory = parentCategories[i];
      var subCategories = parentCategory.subCategories; //console.log("parentCategory"); console.log(parentCategory); console.log("subCategories"); console.log(subCategories);
      for(var j=0; j<subCategories.length; j++) {
        var category = subCategories[j];
        if(category.id == subCategoryId) {  //console.log("Found"); console.log(category);
          parentCategories[i].subCategories[j].images = images; bFound = true; break;
        }
      }
      if(bFound) break;
    }
  }
});
