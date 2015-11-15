/**
* Created by sylflo on 11/7/15.
*/

(function () {

  'use strict';

  angular
  .module('NourritureControllers')
  .controller('RecipesUserProfileController', RecipesUserProfileController);

  RecipesUserProfileController.$inject = ["$scope", "$log", "$rootScope", "$timeout", "RecipeService"];

  function RecipesUserProfileController($scope, $log, $rootScope, $timeout, RecipeService) {
    var vm = this;


    var updateRecipes = function () {
      vm.data = $rootScope.UserProfile;

      vm.data.recipetitle = "Tarte aux pommes";
      vm.data.image = 'assets/images/recipesdummy/tarte.jpg';

      $scope.$watch(angular.bind($rootScope.UserProfile, function () {
        return $rootScope.UserProfile;
      }), function (newVal) {
        vm.data = newVal;
      }, true);
    };


    // avoid lint
    RecipeService += 1;
    // vm.recipeSuccess = function (data) {
    //   $log.log(data._id);
    //   vm.data = $rootScope.UserProfile;
    //
    //   // bind recipes datas from server
    //   //        vm.data.recipetitle = data.title;
    //   vm.data.recipetitle = "data binding from web sucess";
    //   //  vm.data.recipetitle = "Tarte aux pommes from controller";
    //
    //   $scope.$watch(angular.bind($rootScope.UserProfile, function () {
    //     return $rootScope.UserProfile;
    //   }), function (newVal) {
    //     vm.data = newVal;
    //   }, true);
    //
    // };
    //
    // vm.recipeError = function (data) {
    //   $log.error("Error when getting recipes", data);
    //   vm.data = $rootScope.UserProfile;
    //
    //   vm.data.recipetitle = "data binding from web failed";
    //   //  vm.data.recipetitle = "Tarte aux pommes from controller";
    //
    //   $scope.$watch(angular.bind($rootScope.UserProfile, function () {
    //     return $rootScope.UserProfile;
    //   }), function (newVal) {
    //     vm.data = newVal;
    //   }, true);
    // };
    //
    //
    // var getRecipes = function () {
    //   RecipeService.recipes
    //   .get()
    //   .$promise
    //   .then(vm.recipeSuccess, vm.recipeError);
    // };



    $timeout(updateRecipes, 300);

    //      bind with with server after.
    //      $timeout(getRecipes, 300);

  }

})();
