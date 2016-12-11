(function(){
  angular.module('public')
  .controller('SignupController', SignupController);
  SignupController.$inject = ['UserService'];
  function SignupController(UserService){
    var ctrl = this;
    ctrl.submitted = false;
    ctrl.user = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      favoriteDish: ""
    };
    ctrl.submitForm = function(){
      UserService.setUser(ctrl.user);
      ctrl.submitted = true;
    }
  }
})();
