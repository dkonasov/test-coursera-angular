(function(){
  angular.module("MenuApp").config(MenuAppConfig);
  MenuAppConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  function MenuAppConfig($stateProvider, $urlRouterProvider){
    $stateProvider.state("index", {
      templateUrl: "index.state.view.html",
      url: "/"
    })
    .state("categories", {
      templateUrl: "categories.state.view.html",
      controller: "CategoriesStateController",
      controllerAs: "CategoriesState",
      url: "/categories",
      resolve: {
        categories: ["MenuDataService", function(MenuDataService){
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state("items", {
      templateUrl: "items.state.view.html",
      controller: "ItemsStateController",
      controllerAs: "ItemsState",
      url: "/items/{categoryName}",
      resolve: {
        items: ["$stateParams", "MenuDataService", function($stateParams, MenuDataService){
          return MenuDataService.getItemsForCategory($stateParams.categoryName);
        }]
      }
    });
    $urlRouterProvider.otherwise("/");
  };
})();
