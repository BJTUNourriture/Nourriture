(function() {
'use strict';

angular.module('NourritureControllers')
	.controller('RecipesDashboardController', RecipesDashboardController);

RecipesDashboardController.$inject = ["$scope","$log", "SearchService", "toastr"];

function RecipesDashboardController($scope, $log, SearchService, toastr)
{
	var vm = this;

	vm.recipes = []

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

	//Grid tiles vars
	vm.mouseOnTile = false;

	vm.mouseOnTileSet = function(state) {
		vm.mouseOnTile = state;
	}

	//Init data
	SearchService
	.recipes
	.save(vm.table)
	.$promise
	.then(vm.RecipesGetSuccess, vm.RecipesGetFailure)
}

})();
