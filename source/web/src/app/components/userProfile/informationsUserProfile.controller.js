/**
 * Created by sylflo on 11/8/15.
 */

(function () {

  'use strict';

  angular
    .module('NourritureControllers')
    .controller('informationsUserProfileController', informationsUserProfileController);

  informationsUserProfileController.$inject = ["$scope", '$log', '$rootScope', '$timeout'];

  function informationsUserProfileController($scope, $log, $rootScope, $timeout) {

    var vm = this;

    var getUserProfile = function () {
      $log.log("toto", $rootScope.UserProfile);
      vm.data = $rootScope.UserProfile;
      //Init variable for test
      vm.data.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \
      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut \
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum \
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia \
      deserunt mollit anim id est laborum";

      vm.data.badges = ["un", "deux", "trois", "quatre"]
    };

    //Timeout in ms for the moment
    $timeout(getUserProfile, 300);
  }

})();
