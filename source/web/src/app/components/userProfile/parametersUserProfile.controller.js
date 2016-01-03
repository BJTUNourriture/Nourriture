/**
 * Created by sylflo on 11/13/15.
 */

(function () {

  'use strict';

  angular
    .module('NourritureControllers')
    .controller('parametersUserProfileController', parametersUserProfileController);

  parametersUserProfileController.$inject = ['$scope', '$rootScope', '$timeout', '$log', 'UserService', '$localStorage', '$sessionStorage', 'toastr'];

  function parametersUserProfileController($scope, $rootScope, $timeout, $log, UserService, $localStorage, $sessionStorage, toastr) {

    var vm = this;

    var getUserProfile = function () {

      vm.data = $rootScope.UserProfile;
      //Init variable for test
      //Init variable for test
      //vm.data.gender = "male";
      /* vm.data.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \
       et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut \
       aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum \
       dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia \
       deserunt mollit anim id est laborum";*/


      vm.data.confirmEmail = vm.data.email;

      $scope.$watch(angular.bind(vm.data, function () {
        return vm.data;
      }), function (newVal) {
        $rootScope.UserProfile = newVal;
      }, true);

    };

    //Timeout in ms for the moment
    $timeout(getUserProfile, 2000);


    vm.updateProfile = function () {
      $log.log("Updating Profile", $localStorage.user_id, vm.data);
      var like_ingredient = [];
      var dislike_ingredient = [];
      var allergy_ingredient = [];
      var i = 0;

      for (i = 0; i < vm.data.like_chips.length; i++) {
        like_ingredient[i] = {id_ingredient: vm.data.like_chips_id[i], name_ingredient: vm.data.like_chips[i]};
      }

      for (i = 0; i < vm.data.dislike_chips.length; i++) {
        dislike_ingredient[i] = {id_ingredient: vm.data.dislike_chips_id[i], name_ingredient: vm.data.dislike_chips[i]};
      }

      for (i = 0; i < vm.data.alergy_chips.length; i++) {
        allergy_ingredient[i] = {id_ingredient: vm.data.alergy_chips_id[i], name_ingredient: vm.data.alergy_chips[i]};
      }
      var email = $rootScope.UserProfileSave.email;

      if (email != vm.data.email) {
        email = vm.data.email;
        //Think to do the backend for revalid the email
      }

      if (vm.data.password != null) {
        UserService
          .update_user
          .update({id: $localStorage.user_id || $sessionStorage.user_id}, {
            email: vm.data.email,
            description: vm.data.description,
            gender: vm.data.gender,
            password: vm.data.password,
            like: like_ingredient,
            dislike: dislike_ingredient,
            alergy: allergy_ingredient
          })
          .$promise
          .then(vm.updateUserSuccess, vm.updateUserError);
      } else {
        UserService
          .update_user
          .update({id: $localStorage.user_id || $sessionStorage.user_id}, {
            email: vm.data.email,
            description: vm.data.description,
            gender: vm.data.gender,
            like: like_ingredient,
            dislike: dislike_ingredient,
            alergy: allergy_ingredient
          })
          .$promise
          .then(vm.updateUserSuccess, vm.updateUserError);
      }


    };


    vm.updateUserSuccess = function (data) {
      $log.log("data = ", data);
      //$rootScope.UserProfileSave = $rootScope.UserProfile;
      angular.copy($rootScope.UserProfile, $rootScope.UserProfileSave);
      toastr.success('Your profile is updated', 'Nourriture');
    };

    vm.updateUserError = function (data) {
      $log.error("Error when updating user", data);
      angular.copy($rootScope.UserProfileSave, vm.data);
      toastr.error('There was a problem when updated your profile', 'Nourriture');

    };


  }

})
();
