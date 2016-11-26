(function(){
  angular.module("NarrowItDownApp", [])
  .constant("URL", "https://davids-restaurant.herokuapp.com")
  .service("MenuSearchService", MenuSearchService)
  .controller("NarrowItDownController", NarrowItDownController)
  .directive("foundItems", foundItems);
  function foundItems(){
    return {
      scope: {
        message: "@",
        itemsList: "=",
        onRemove: "&"
      },
      templateUrl: "foundItems.html",
    }
  }
  NarrowItDownController.$inject = ["MenuSearchService"];
  function NarrowItDownController(MenuSearchService){
    var ctrl = this;
    ctrl.items = [];
    ctrl.message = "";
    ctrl.searchTerm = "";
    ctrl.loading=false;
    ctrl.searchItems = function(){
      ctrl.loading = true;
      MenuSearchService.getMatchedMenuItems(this.searchTerm).then(function(items){
        ctrl.items = items;
        if (items.length === 0){
          ctrl.message = "Nothing found";
        } else {
          ctrl.message = "";
        }
      }).finally(function(){
        ctrl.loading = false;
      });
    };
    ctrl.removeItem = function(index){
      ctrl.items.splice(index, 1);
      if (ctrl.items.length === 0){
        ctrl.message = "Nothing found";
      }
    };
  }
  MenuSearchService.$inject = ["$http", "$q", "URL"];
  function MenuSearchService($http, $q, URL){
    this.getMatchedMenuItems = function(searchTerm){
      var deffered = $q.defer();
      if (!searchTerm || searchTerm === ""){
        deffered.resolve([]);
      } else {
        $http({
          url: URL + "/menu_items.json",
          method: "GET"
        }).then(function(res){
          var itemsArray = [];
          var item;
          for (var i = 0; i < res.data.menu_items.length; i++){
            item = res.data.menu_items[i];
            if (item.description.indexOf(searchTerm) > -1){
              itemsArray.push(item);
            }
          }
          deffered.resolve(itemsArray);
        }).catch(function(res){
          deffered.reject(res);
        });
      }
      return deffered.promise;
    };
  }
})();
