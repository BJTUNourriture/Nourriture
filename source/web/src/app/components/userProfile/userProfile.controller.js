(function () {
  'use strict';

  angular.module('NourritureControllers')
    .controller('UserProfileController', UserProfileController);

  UserProfileController.$inject = ["$rootScope", "$log", "UserService", "$localStorage", "$sessionStorage"];

  /** @ngInject */
  function UserProfileController($rootScope, $log, UserService, $localStorage, $sessionStorage) {

    var vm = this;

    vm.profileSuccess = function (data) {
      $log.log(data._id);
      $rootScope.UserProfile = data;
      $rootScope.UserProfileSave = {};
      angular.copy($rootScope.UserProfile, $rootScope.UserProfileSave);
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


