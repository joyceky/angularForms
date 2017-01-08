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
      }
    }

    function resetForm () {
      vm.user = {};
      vm.usernameForm.$setPristine();
      vm.usernameForm.$setUntouched();
    }
  }

})();
