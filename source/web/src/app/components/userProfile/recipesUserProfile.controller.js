/**
* Created by sylflo on 11/7/15.
*/

(function () {

  'use strict';

  angular
  .module('NourritureControllers')
  .controller('RecipesUserProfileController', RecipesUserProfileController);

  RecipesUserProfileController.$inject = ["$scope", "$log", "$rootScope", "$timeout", "SearchService", "$state", "toastr"];

  function RecipesUserProfileController($scope, $log, $rootScope, $timeout, SearchService , $state, toastr) {
    var vm = this;

    // var updateRecipes = function () {
    //   vm.recipes = [];//$rootScope.UserProfile;
    //   //vm.recipes = [];
    //   //vm.recipes = recipes
    //
    //   // DATA SET 1
    //   //vm.recipes = [{recipetitle:"Tarte aux pommes", image:"assets/images/recipesdummy/tarte.jpg"}];
    //
    //   // DATA SET 2
    //   // vm.recipes = [{recipetitle:"Tarte aux pommes", image:"assets/images/recipesdummy/tarte.jpg"},
    //   //   {recipetitle:"Tripes à la mode de Caen", image:"assets/images/recipesdummy/tripe.jpg"},
    //   //   {recipetitle:"Coquilles saint jacques marinées au citron", image:"assets/images/recipesdummy/jacques.jpg"}
    //   // ];
    //
    //   // DATA SET 3
    //   vm.recipes = [{recipetitle:"Tarte aux pommes", image:"assets/images/recipesdummy/tarte.jpg"},
    //   {recipetitle:"Tripes à la mode de Caen", image:"assets/images/recipesdummy/tripe.jpg"},
    //   {recipetitle:"Big top cake", image:"assets/images/recipesdummy/bigtopcake.jpg"},
    //   {recipetitle:"Coquilles saint jacques marinées au citron", image:"assets/images/recipesdummy/jacques.jpg"},
    //   {recipetitle:"Coquilles saint jacques marinées au citron", image:"assets/images/recipesdummy/jacques.jpg"}
    //   ];
    // };

    vm.recipeSuccess = function (data) {
       vm.recipes = data.recipes;
    };

    vm.recipeError = function (data) {
      $log.error("Error when getting recipes", data);
      toastr.error(data, 'Woops...');
    };

    var getRecipes = function () {
      vm.table = {
        name : '',
        metadata : {
          "items": 100,
          "page" : 1
        }
      };

      SearchService
      .recipes
      .save(vm.table)
      .$promise
      .then(vm.recipeSuccess, vm.recipeError);
    };

    vm.goToRecipePage = function(recipe) {
      $state.go("main.recipe-page", {"id" : recipe._id});
    }

    $timeout(getRecipes, 2000);
  }

})();
