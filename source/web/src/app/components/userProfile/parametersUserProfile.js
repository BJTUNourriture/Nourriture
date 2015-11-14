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

      vm.data.badge = ["un", "deux", "trois", "quatre"];
      vm.data.like = [{name_ingredient: "one"}, {name_ingredient: "two"}, {name_ingredient: "three"}, {name_ingredient: "four"},
        {name_ingredient: "five"}, {name_ingredient: "six"}, {name_ingredient: "seven"}, {name_ingredient: "eight"},
        {name_ingredient: "nine"}, {name_ingredient: "ten"}, {name_ingredient: "eleven"}, {name_ingredient: "twelve"}];
      vm.data.dislike = [{name_ingredient: "one"}, {name_ingredient: "choux fleur"}, {name_ingredient: "choux de brus"}];
      vm.data.religion = [{name: "christian"}];
      vm.data.alergy = [{name: "eggs"}, {name: "milk"}];
      vm.data.followed_by = [{username: "thomas"}, {username: "vincent"}, {username: "top chef"}];
      vm.data.follow = [{username: "fanny"}, {username: "giselle"}, {username: "gertrude"}];
      vm.data.joined_groups = [{name: "freedom to opressed vegetables"}, {name: "Faites du Fruuuiiiitt!!"}];
      vm.data.recipe_post = [{name: "Grilled duck"}, {name: "baguette"}];
      vm.data.recipe_like = [{name: "marmelade"}, {name: "cantonese rice"}];

      $scope.$watch(angular.bind(vm.data, function () {
        return vm.data;
      }), function (newVal) {
        $rootScope.UserProfile = newVal;
      }, true);

    };

    //Timeout in ms for the moment
    $timeout(getUserProfile, 300);


    vm.updateProfile = function () {
      $log.log("Updating Profile", $localStorage.user_id, vm.data);

      UserService
        .update_user
        .update({id: $localStorage.user_id || $sessionStorage.user_id}, {
          description: vm.data.description,
          gender: vm.data.gender
        })
        .$promise
        .then(vm.updateUserSuccess, vm.updateUserError);
    };


    vm.updateUserSuccess = function (data) {
      $log.log("Updated user", data);
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
