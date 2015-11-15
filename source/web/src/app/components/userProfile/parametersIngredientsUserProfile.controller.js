/**
 * Created by sylflo on 11/15/15.
 */

(function () {

  'use strict';

  angular.module('NourritureControllers')
    .controller('ParametersIngredientsUserProfileController', ParametersIngredientsUserProfileController);

  ParametersIngredientsUserProfileController.$inject = ["$scope", "IngredientService", 'TagsService', 'toastr', "$log", "$mdDialog", "$document"];

  function ParametersIngredientsUserProfileController($scope, IngredientService, TagsService, toastr, $log, $mdDialog, $document) {

    var vm = this;

    $log.log("innit");

    //Vars for Chips
    vm.names_ingredient = [];
    vm.selectedItemChip = null;
    vm.searchTextChip = null;
    vm.itemsAutocomplete = [];


    //Chips functions
    vm.transformChip = function (chip) {
      if (angular.isObject(chip))
        return chip;
      if (angular.isUndefined(chip._id))
        return {
          name: chip
        };
      else
        return {
          name: chip.name
        }
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


  }

})();
