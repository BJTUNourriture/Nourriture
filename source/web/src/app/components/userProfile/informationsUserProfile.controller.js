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
    //  console.log("Bonjour");
    $log.debug("test informationUserProfileCOntroller", $rootScope.UserProfile);

    var getUserProfile = function() {
      $log.log("toto", $rootScope.UserProfile);
    };

    //Timeout in ms for the moment
    $timeout(getUserProfile, 300);
  }

})();
