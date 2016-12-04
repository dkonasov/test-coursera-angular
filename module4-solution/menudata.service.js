(function(){
  angular.module("data").service("MenuDataService", MenuDataService);
  MenuDataService.$inject = ["$http", "API"];
  function MenuDataService($http, API){
    this.getAllCategories = function(){
      return $http({
        method: "GET",
        url: API + "/categories.json"
      })
      .then(function(res){
        return res.data;
      })
      .catch(function(res){
        console.log("Something went wrong. Here is the reason: ");
        console.log(res);
      });
    };

    this.getItemsForCategory = function(categoryShortName){
      return $http({
        method: "GET",
        url: API + "/menu_items.json?category=" + categoryShortName
      })
      .then(function(res){
        return res.data.menu_items;
      })
      .catch(function(res){
        console.log("Something went wrong. Here is the reason: ");
        console.log(res);
      });
    }
  }
})();
