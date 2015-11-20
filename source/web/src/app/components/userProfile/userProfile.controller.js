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
      vm.data = data;
      $rootScope.UserProfile = data;
      $rootScope.UserProfileSave = {};
      $rootScope.UserProfile.like_chips = [];
      $rootScope.UserProfile.like_chips_id = [];
      for(var i = 0; i < $rootScope.UserProfile.like.length; i++) {
        $rootScope.UserProfile.like_chips[i] = $rootScope.UserProfile.like[i].name_ingredient;
        $rootScope.UserProfile.like_chips_id[i] = $rootScope.UserProfile.like[i].id_ingredient;


      }
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


