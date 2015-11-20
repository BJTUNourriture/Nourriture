/**
 * Created by sylflo on 11/8/15.
 */

(function () {

  'use strict';

  angular
    .module('NourritureControllers')
    .controller('informationsUserProfileController', informationsUserProfileController);

  informationsUserProfileController.$inject = ["$scope", '$log', '$rootScope', '$timeout', '$mdDialog', '$document', 'IngredientService'];

  function informationsUserProfileController($scope, $log, $rootScope, $timeout, $mdDialog, $document, IngredientService) {

    var vm = this;
    vm.extend = {};


    var getUserProfile = function () {
      vm.data = $rootScope.UserProfile;
      //Init variable for test
      vm.data.gender = "male";
      /* vm.data.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \
       et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut \
       aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum \
       dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia \
       deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \
       et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut \
       aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum \
       dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia \
       deserunt mollit anim id est laborum";*/

      vm.data.badge = ["un", "deux", "trois", "quatre", "cinq"];
      /* vm.data.like = [{name_ingredient: "one"}, {name_ingredient: "two"}, {name_ingredient: "three"}, {name_ingredient: "four"},
       {name_ingredient: "five"}, {name_ingredient: "six"}, {name_ingredient: "seven"}, {name_ingredient: "eight"},
       { name_ingredient: "nine" }, { name_ingredient: "ten" }, { name_ingredient: "eleven" }, { name_ingredient: "titi" }, { name_ingredient: "thirteen" }, { name_ingredient: "fourteen" }, { name_ingredient: "sixteen" }, { name_ingredient: "seventeen" }];
       */
      vm.data.dislike = [{name_ingredient: "one"}, {name_ingredient: "choux fleur"}, {name_ingredient: "choux de brus"}, {name_ingredient: "carotte"}];
      vm.data.religion = [{name: "christian"}];
      vm.data.alergy = [{name: "eggs"}, {name: "milk"}];
      vm.data.followed_by = [{username: "thomas"}, {username: "vincent"}, {username: "top chef"}];
      vm.data.follow = [{username: "fanny"}, {username: "giselle"}, {username: "gertrude"}];
//      vm.data.joined_groups = [{name: "freedom to opressed vegetables"}, {name: "Faites du Fruuuiiiitt!!"}];
      vm.data.recipe_post = [{name: "Grilled duck"}, {name: "baguette"}];
      vm.data.recipe_like = [{name: "marmelade"}, {name: "cantonese rice"}];

      console.log("informationUserProfile ", vm.data.like);

      $scope.$watch(angular.bind($rootScope.UserProfile, function () {
        return $rootScope.UserProfile;
      }), function (newVal) {
        vm.data = newVal;
      }, true);
    };

    vm.getIngredientSuccess = function (data) {

      console.log("data = ", data);
      var ingredient = data;
      $mdDialog.show({
        controller: vm.dialogController,
        controllerAs: "infosIngredient",
        templateUrl: 'app/templates/dialogTemplates/ingredientInfos.tmpl.html',
        parent: angular.element($document.body),
        locals: {ingredient: ingredient},
        bindToController: true,
        targetEvent: event,
        clickOutsideToClose: true
      });

      console.log("end dialog show");
    };

    vm.getIngredientFailure = function (data) {
      console.error("error when getting the ingredient");
    };

    vm.infosIngredientDialog = function (event, ingredient) {

      /*ingredient.calories = 100;
       ingredient.fat = 100;*/
     IngredientService
        .ingredient_id
        .get({id: ingredient.id_ingredient})
        .$promise
        .then(vm.getIngredientSuccess, vm.getIngredientFailure);

    /*  $mdDialog.show({
        controller: vm.dialogController,
        controllerAs: "infosIngredient",
        templateUrl: 'app/templates/dialogTemplates/ingredientInfos.tmpl.html',
        parent: angular.element($document.body),
        locals: {ingredient: ingredient},
        bindToController: true,
        targetEvent: event,
        clickOutsideToClose: true
      });*/


    };
    vm.dialogController = function ($mdDialog) {
      var vm = this;

      vm.hide = function () {
        $mdDialog.hide();
      }
    };


    //Timeout in ms for the moment
    $timeout(getUserProfile, 700);
  }

})();
