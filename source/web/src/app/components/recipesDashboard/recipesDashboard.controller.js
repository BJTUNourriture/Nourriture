(function() {
'use strict';

angular.module('NourritureControllers')
	.controller('RecipesDashboardController', RecipesDashboardController);

RecipesDashboardController.$inject = ["$scope","$log"];

function RecipesDashboardController($scope, $log)
{
	var vm = this;

	//Grid tiles vars
	vm.mouseOnTile = false;

	vm.mouseOnTileSet = function(state) {
		vm.mouseOnTile = state;
	}
}

})();
