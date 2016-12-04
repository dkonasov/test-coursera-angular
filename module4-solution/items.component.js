(function(){
  angular.module("MenuApp").component("items", {
    bindings: {
      items: "<"
    },
    templateUrl: "items.view.html"
  });
})()
