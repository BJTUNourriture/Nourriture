(function() {
'use strict';

angular.module('NourritureControllers')
	.controller('RecipesDashboardController', RecipesDashboardController);

RecipesDashboardController.$inject = ["$scope","$log", "SearchService", "toastr"];

function RecipesDashboardController($scope, $log, SearchService, toastr)
{
	var vm = this;

	vm.recipes = []
	vm.retrievingRecipes = true;

	vm.ArrowPos = 0;

	//Table specs
	vm.table = {
		title : '',
		metadata : {
			"items": 10,
			"page" : 1 

		}
	};

	vm.RecipesGetSuccess = function(data) {
		$log.log(data);
		vm.recipes = data.recipes;
		vm.retrievingRecipes = false;
	}

	vm.RecipesGetFailure = function (data) {
		$log.log(data.data);
		var errorMsg = "This is odd...";
		if(data.data.errmsg)
			if (data.data.errmsg.indexOf("name") > -1)
				errorMsg = "Seems like the ingredient already exists";
		if (data.data.message)
			errorMsg = "This ingredient doesn't exist";
		toastr.error(errorMsg, 'Woops...', {timeOut : 300});
	};

	//Init data
	SearchService
	.recipes
	.save(vm.table)
	.$promise
	.then(vm.RecipesGetSuccess, vm.RecipesGetFailure)

	vm.range = function (number) {
		return new Array(number);
	}

	//Search by name
	vm.searchRecipes = function ()
	{
		vm.retrievingRecipes = true;
		vm.table.title = $scope.search;
		vm.recipes = [];
		SearchService
		.recipes
		.save(vm.table)
		.$promise
		.then(vm.RecipesGetSuccess, vm.RecipesGetFailure);
	}

	//Order by Name
	vm.RecipesOrderByName = function() {
		var vm = this;

		vm.table.order = {}
		if (vm.ArrowPos == 1) {
			vm.table.order.field = "title";
			vm.table.order.order = "desc";
			vm.ArrowPos = 2;
		}
		else {
			vm.table.order.field = "title";
			vm.table.order.order = "asc";
			vm.ArrowPos = 1;
		}
		vm.searchRecipes()
	}

	vm.RecipesOrderByScore = function() {
		var vm = this;

		vm.table.order = {}
		if (vm.ArrowPos == 3) {
			vm.table.order.field = "average_score";
			vm.table.order.order = "desc";
			vm.ArrowPos = 4;
		}
		else {
			vm.table.order.field = "average_score";
			vm.table.order.order = "asc";
			vm.ArrowPos = 3;
		}
		vm.searchRecipes()
	}

	vm.RecipesOrderByDifficulty = function() {
		var vm = this;

		vm.table.order = {}
		if (vm.ArrowPos == 6) {
			vm.table.order.field = "difficulty";
			vm.table.order.order = "desc";
			vm.ArrowPos = 5;
		}
		else {
			vm.table.order.field = "difficulty";
			vm.table.order.order = "asc";
			vm.ArrowPos = 6;
		}
		vm.searchRecipes()
	}

}

})();
