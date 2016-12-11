(function(){
  angular.module('common')
  .service('UserService', UserService);
  UserService.$inject = ['$http', 'ApiPath'];
  function UserService($http, ApiPath){
    var isAuthorised = false;
    var user = {};
    this.checkAuth = function(){
      return isAuthorised;
    };
    this.setUser = function(userData){
      user = userData;
      isAuthorised = true;
    }

    this.getUser = function(){
      if (!isAuthorised){
        return false;
      } else {
        return $http.get(ApiPath + '/menu_items/' + user.favoriteDish + '.json').then(function(res){
          user.favoriteDishInfo = res.data;
          return user;
        });
      }
    }
  }
})();
