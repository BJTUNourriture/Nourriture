/**
* Created by sylflo on 11/7/15.
*/

(function () {

  'use strict';

  angular
  .module('NourritureControllers')
  .controller('RecipesUserProfileController', RecipesUserProfileController);

  RecipesUserProfileController.$inject = ["$scope", "$log", "$rootScope", "$timeout", "SearchService"];

  function RecipesUserProfileController($scope, $log, $rootScope, $timeout, SearchService) {
    var vm = this;

    var updateRecipes = function () {
      vm.recipes = [];//$rootScope.UserProfile;
      //vm.recipes = [];
      //vm.recipes = recipes

      // DATA SET 1
      //vm.recipes = [{recipetitle:"Tarte aux pommes", image:"assets/images/recipesdummy/tarte.jpg"}];

      // DATA SET 2
      vm.recipes = [{recipetitle:"Tarte aux pommes", image:"assets/images/recipesdummy/tarte.jpg"},
        {recipetitle:"Tripes à la mode de Caen", image:"assets/images/recipesdummy/tripe.jpg"},
        {recipetitle:"Coquilles saint jacques marinées au citron", image:"assets/images/recipesdummy/jacques.jpg"},
        {recipetitle:"Coquilles saint jacques marinées au citron", image:"assets/images/recipesdummy/jacques.jpg"},
        {recipetitle:"Coquilles saint jacques marinées au citron", image:"assets/images/recipesdummy/jacques.jpg"}
      ];

      // DATA SET 3
      // vm.recipes = [{recipetitle:"Tarte aux pommes", image:"assets/images/recipesdummy/tarte.jpg"},
      // {recipetitle:"Tripes à la mode de Caen", image:"assets/images/recipesdummy/tripe.jpg"},
      // {recipetitle:"Coquilles saint jacques marinées au citron", image:"assets/images/recipesdummy/jacques.jpg"},
      // {recipetitle:"Coquilles saint jacques marinées au citron", image:"assets/images/recipesdummy/jacques.jpg"},
      // {recipetitle:"Coquilles saint jacques marinées au citron", image:"assets/images/recipesdummy/jacques.jpg"}
      // ];
    };


    // avoid lint
    SearchService += 1;
    // vm.recipeSuccess = function (data) {
    //   $log.log(data._id);
    //   vm.data = $rootScope.UserProfile;
    //    $log.log(data);
    //    vm.recipes = data.recipes;
    //
    //   // bind recipes datas from server
    //   //        vm.data.recipetitle = data.title;
    //   //        vm.data.image = data.pictures.thumbnail_url;
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



    $timeout(updateRecipes, 1500);


    // SearchService
    // .recipes
    // .save(vm.table)
    // .$promise
    // .then(vm.recipeSuccess, vm.recipeError)

    //      bind with with server after.
    //      $timeout(getRecipes, 300);

  }

})();
