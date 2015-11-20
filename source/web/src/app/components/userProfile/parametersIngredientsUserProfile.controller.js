/**
 * Created by sylflo on 11/15/15.
 */

(function () {

  'use strict';

  angular.module('NourritureControllers')
    .controller('ParametersIngredientsUserProfileController', ParametersIngredientsUserProfileController);

  ParametersIngredientsUserProfileController.$inject = ["IngredientService", "$log", '$rootScope', '$timeout', '$scope'];

  function ParametersIngredientsUserProfileController(IngredientService, $log, $rootScope, $timeout, $scope) {
    var vm = this;

    function getUserProfile() {

      vm.data = $rootScope.UserProfile;

      vm.names_ingredient = vm.data.like_chips;


      $log.log("names_ingreident = ", vm.names_ingredient);
      vm.selectedItemChip = null;
      vm.searchTextChip = null;
      vm.itemsAutocomplete = [];
    }

    vm.transformFromAPItoChip = function (original) {
      var new_chip = {};

      new_chip.id_ingredient = original._id;
      new_chip.name_ingredient = original.name;
      $rootScope.UserProfile.like_chips_id.push(original._id);

      return (original.name);
    };

    //Chips functions
    vm.transformChip = function (chip) {
      chip = vm.transformFromAPItoChip(chip);
      return chip;

    };

    vm.getNameIngredients = function (name) {
      $log.log("innit");
      return (IngredientService
        .ingredient_name
        .query({name: name})
        .$promise
        .then(vm.IngredientsGetNameSuccess, vm.IngredientsGetNameFailure));

    };

    vm.IngredientsGetNameFailure = function (data) {
      $log.log(data.data);
      vm.itemsAutocomplete = [];
      return (vm.itemsAutocomplete);
    };

    vm.IngredientsGetNameSuccess = function (data) {
      $log.log(data);
      vm.itemsAutocomplete = data;
      return (vm.itemsAutocomplete);
    };


    //Timeout in ms for the moment
    $timeout(getUserProfile, 1000);

    $scope.$watch(angular.bind(vm.data, function () {
      return vm.data;
    }), function (newVal) {
      $rootScope.UserProfile = newVal;
    }, true);


  }

})();
