/**
 * Created by Benjamin on 11/14/15.
 */

(function () {

  'use strict';

  angular
    .module('NourritureControllers')
    .controller('groupsUserProfileController', groupsUserProfileController);

  groupsUserProfileController.$inject = ["$scope", '$state','$log', '$rootScope', '$timeout'];

  function groupsUserProfileController($scope, $state, $log, $rootScope, $timeout) {

    var vm = this;
    vm.extend = {};


    var getUserProfile = function () {
      vm.data = $rootScope.UserProfile;


      $scope.$watch(angular.bind($rootScope.UserProfile, function () {
        return $rootScope.UserProfile;
      }), function (newVal) {
        vm.data = newVal;
      }, true);
    };

    vm.extend = function(key) {

      vm.extend[key] = true;
    };

    vm.goToGroupPage = function(id_group) {
      $log.log(id_group);
      $state.go("main.group-page", {id : id_group});
    }

    vm.goToCreateGroup = function(id_group) {
      $log.log(id_group);
      $state.go("main.create-group");
    }



    //Timeout in ms for the moment
    $timeout(getUserProfile, 2000);
  }

})();
