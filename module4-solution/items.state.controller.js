(function(){
  angular.module("MenuApp").controller("ItemsStateController", ItemsStateController);
  ItemsStateController.$inject = ["items"];
  function ItemsStateController(items){
    this.items = items;
  }
})()
