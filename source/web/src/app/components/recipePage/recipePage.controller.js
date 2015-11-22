(function() {
'use strict';

angular.module('NourritureControllers')
	.controller('RecipePageController', RecipePageController);

RecipePageController.$inject = ["$scope","$log","$timeout"];

function RecipePageController($scope, $log, $timeout)
{
	var vm = this;

	var initRecipes = function () {
		//vm.recipe = [];//$scope.recipe;
		vm.recipe = [];
		vm.recipe.title = "test";
	};

	initRecipes();
//	$timeout(getRecipes, 1200);

}

})();
