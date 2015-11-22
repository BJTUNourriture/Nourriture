(function() {
'use strict';

angular.module('NourritureControllers')
	.controller('RecipePageController', RecipePageController);

RecipePageController.$inject = ["$scope", "toastr", "$log", "RecipeService", "$stateParams", "$state"];

function RecipePageController($scope, toastr, $log, RecipeService,  $stateParams, $state)
{
	var vm = this;

	vm.RecipeSuccess = function (data) {
		$log.log(data);
		vm.recipe = data;
	};

	vm.RecipeFailure = function (data) {
		$log.log(data.data);
		toastr.error(data, 'Woops...');
	};

	vm.goToIngredientPage = function (id_ingredient) {
		$state.go("main.ingredient-page", {id: id_ingredient});
	}

	RecipeService
		.recipe_id
		.get({"id" : $stateParams.id})
		.$promise
		.then(vm.RecipeSuccess, vm.RecipeFailure);
}

})();
