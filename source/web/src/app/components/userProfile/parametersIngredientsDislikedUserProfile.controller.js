/**
 * Created by sylflo on 11/15/15.
 */

(function () {

  'use strict';

  angular.module('NourritureControllers')
    .controller('ParametersIngredientsDislikedUserProfileController', ParametersIngredientsDislikedUserProfileController);

  ParametersIngredientsDislikedUserProfileController.$inject = ["IngredientService", "$log", '$rootScope', '$timeout', '$scope', '$mdDialog', '$document', '$state'];

  function ParametersIngredientsDislikedUserProfileController(IngredientService, $log, $rootScope, $timeout, $scope, $mdDialog, $document, $state) {
    var vm = this;

    function getUserProfile() {

      vm.data = $rootScope.UserProfile;

      vm.names_ingredient = vm.data.like_chips;


      vm.selectedItemChip = null;
      vm.searchTextChip = null;
      vm.itemsAutocomplete = [];
    }

    vm.transformFromAPItoChip = function (original) {
      var new_chip = {};

      new_chip.id_ingredient = original._id;
      new_chip.name_ingredient = original.name;
      $rootScope.UserProfile.like_chips_id.push(original._id);
      if (vm.names_ingredient.indexOf(original.name) == -1) {
        vm.data.like.push(new_chip);
      }

      return (original.name);
    };

    //Chips functions
    vm.transformChip = function (chip) {
      chip = vm.transformFromAPItoChip(chip);
      return chip;

    };

    vm.getNameIngredients = function (name) {
      return (IngredientService
        .ingredient_name
        .query({name: name})
        .$promise
        .then(vm.IngredientsGetNameSuccess, vm.IngredientsGetNameFailure));

    };

    vm.IngredientsGetNameFailure = function (data) {
      $log.error(data.data);
      vm.itemsAutocomplete = [];
      return (vm.itemsAutocomplete);
    };

    vm.IngredientsGetNameSuccess = function (data) {
      vm.itemsAutocomplete = data;
      return (vm.itemsAutocomplete);
    };


    vm.infoIngredientSuccess = function (data) {
      var ingredient = data[0];
      return ingredient;
    };

    vm.infoIngredentFailure = function (data) {
      $log.error("error getting ingredient", data);

    };


    vm.infosIngredientDialog = function (event, ingredient_name) {

      $mdDialog.show({
          controller: vm.dialogController,
          controllerAs: "infosIngredient",
          templateUrl: 'app/templates/dialogTemplates/ingredientInfos.tmpl.html',
          parent: angular.element($document.body),
          locals: {
            ingredient: IngredientService
              .ingredient_name
              .query({name: ingredient_name})
              .$promise
              .then(vm.infoIngredientSuccess, vm.infoIngredentFailure)
          },
          bindToController: true,
          targetEvent: event,
          clickOutsideToClose: true
        }
      );

    };

    vm.dialogController = function ($mdDialog) {
      var vm = this;

      vm.hide = function () {
        $mdDialog.hide();
      };

      vm.goToIngredientPage = function (id_ingredient) {
        $state.go("main.ingredient-page", {id: id_ingredient});
      }
    };

    vm.deleteChips = function (chip, index) {

      var find_ingredient = false;
      for (var i = 0; i < $rootScope.UserProfile.like.length; i++) {
        if ($rootScope.UserProfile.like[i].name_ingredient == chip) {
          find_ingredient = true;
          break;
        }
      }

      if (find_ingredient) {
        $rootScope.UserProfile.like.splice(index, 1);
      }

    };


//Timeout in ms for the moment
    $timeout(getUserProfile, 1000);

    $scope.$watch(angular.bind(vm.data, function () {
      return vm.data;
    }), function (newVal) {
      $rootScope.UserProfile = newVal;
    }, true);


  }

})
();
