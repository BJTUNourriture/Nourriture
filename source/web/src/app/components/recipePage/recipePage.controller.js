(function() {
'use strict';

angular.module('NourritureControllers')
	.controller('RecipePageController', RecipePageController);

RecipePageController.$inject = ["$scope"];

function RecipePageController($scope)
{
	var vm = this;

	var initRecipes = function () {
		//vm.recipe = [];//$scope.recipe;
		vm.recipe = [];
		vm.recipe.title = "Big Top Cake";
		vm.recipe.average_score = "0";
		vm.recipe.date_posted = "2015-03-31T22:00:00.000Z";
		vm.recipe.time_preparation = "60";
		vm.recipe.average_price = "1";
		vm.recipe.number_vote = "1";
		vm.recipe.ingredients = [];
		vm.recipe.pictures = [];

		vm.recipe.pictures[0] = [];
		vm.recipe.pictures[1] = [];
		vm.recipe.pictures[2] = [];

		vm.recipe.pictures[0].thumbnail_url = "assets/images/recipesdummy/tarte.jpg";
		vm.recipe.pictures[1].thumbnail_url = "assets/images/recipesdummy/tarte.jpg";
		vm.recipe.pictures[2].thumbnail_url = "assets/images/recipesdummy/tarte.jpg";


		vm.recipe.ingredients[0] = [];
		vm.recipe.ingredients[1] = [];
		vm.recipe.ingredients[2] = [];

		vm.recipe.ingredients[0].name = "Eggs";
		vm.recipe.ingredients[0].quantity = "6";

		vm.recipe.ingredients[1].name = "Butter";
		vm.recipe.ingredients[1].quantity = "2 x 160g";

		vm.recipe.ingredients[2].name = "packets strawberry-flavoured sour straps";
		vm.recipe.ingredients[2].quantity = "60g";
		vm.recipe.description = "test html";
	};

	initRecipes();
//	$timeout(getRecipes, 1200);

}

})();
