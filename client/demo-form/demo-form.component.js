(function () {
  "use strict";

  angular
    .module("app", [])
    .component("demoForm", {
        templateUrl: "demo-form/demo-form.template.html",
        controller: DemoFormController
    });

  function DemoFormController () {

    var vm = this;

    vm.submitForm = submitForm;
    vm.resetForm = resetForm;
    vm.user = {};

    function submitForm(username, password) {
      if(username && password) {
        console.log(username, password);

        // vm.user.name = username;
        // vm.user.password = password;

        console.log(vm.user);
      }
    }

    function resetForm () {
      vm.user = {};
      vm.usernameForm.$setPristine();
      vm.usernameForm.$setUntouched();
    }
  }

})();
