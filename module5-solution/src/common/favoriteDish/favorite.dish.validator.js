(function(){
  angular.module('common')
  .directive('favoriteDish', favoriteDish)
  favoriteDish.$inject = ["$q", "MenuService"];
  function favoriteDish($q, MenuService){
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl){
        ctrl.$asyncValidators["favoriteDish"] = function(modelValue, viewValue){
          var deferred = $q.defer();
          if (ctrl.$isEmpty(modelValue)) {
              // consider empty models to be valid
              deferred.resolve();
          }
          MenuService.checkIfItemExists(modelValue).then(function(){
            deferred.resolve();
          }).catch(function(){
            deferred.reject("Item doesn't exists!");
          });
          return deferred.promise;
        }
      }
    }
  }
})();
