(function(){
  angular.module("MenuApp").controller("CategoriesStateController", CategoriesStateController);
  CategoriesStateController.$inject = ["categories"];
  function CategoriesStateController(categories){
    this.categories = categories;
  }
})();
