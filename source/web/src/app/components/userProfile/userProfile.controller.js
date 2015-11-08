(function () {
  'use strict';

  angular.module('NourritureControllers')
    .controller('UserProfileController', UserProfileController);

  UserProfileController.$inject = ["$scope", "$log", "UserService", "$localStorage", "$sessionStorage"];

  /** @ngInject */
  function UserProfileController($scope, $log, UserService, $localStorage, $sessionStorage) {
    var vm = this;


    vm.profileSuccess = function (data) {
      $log.log(data._id);
    };

    vm.profileError = function (data) {
      $log.error("Error when getting user", data);
    };

    vm.getUser = function () {

      UserService.user_get_id
        .get({id: $localStorage.user_id || $sessionStorage.user_id})
        .$promise
        .then(vm.profileSuccess, vm.profileError);


    };

    vm.getUser();





  }

})();


