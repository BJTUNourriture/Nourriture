/**
 * Created by sylflo on 11/8/15.
 */

(function () {

  'use strict';

  angular
    .module('NourritureControllers')
    .controller('informationsUserProfileController', informationsUserProfileController);

  informationsUserProfileController.$inject = ["$scope", '$log'];

  function informationsUserProfileController($scope, $log) {
    //  console.log("Bonjour");
    $log.debug("test");
    //  $log.debug($scope.informationsProfile);
  }

})();
