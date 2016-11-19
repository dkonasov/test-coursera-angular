(function(){
  angular.module("ShoppingListCheckOff", [])
  .controller("ToBuyController", ToBuyController)
  .controller("AlreadyBoughtController", AlreadyBoughtController)
  .service("ShoppingListCheckOffService", ShoppingListCheckOffService);
  ToBuyController.$inject = ["ShoppingListCheckOffService"];
  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
  ShoppingListCheckOffService.$inject = [];
  function ToBuyController(ShoppingListCheckOffService){
    this.toBuyList = ShoppingListCheckOffService.toBuy;
    this.buy = function(index){
      ShoppingListCheckOffService.buyItem(index);
    };
  };
  function AlreadyBoughtController(ShoppingListCheckOffService){
    this.srvc = ShoppingListCheckOffService;
  };
  function ShoppingListCheckOffService(){
    this.toBuy = [
      {name: "cookies", quantity: 10},
      {name: "candies", quantity: 50},
      {name: "sandwiches", quantity: 2},
      {name: "pancakes", quantity: 5},
      {name: "burgers", quantity: 3}
    ];
    this.alreadyBought = [];
    this.buyItem = function(index){
      this.alreadyBought = this.alreadyBought.concat(this.toBuy.slice(index, index + 1));
      this.toBuy.splice(index, 1);
    }
  };
})()
