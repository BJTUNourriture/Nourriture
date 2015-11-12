(function() {
'use strict';

angular.module('NourritureControllers')
	.controller('IngredientsDashboardController', IngredientsDashboardController);

IngredientsDashboardController.$inject = ["$scope", "IngredientService", 'toastr',"$log"];

function IngredientsDashboardController($scope, IngredientService, toastr, $log)
{
	var vm = this;

	$log.log("innit");

	vm.IngredientsGetSuccess = function (data) {
		$log.log(data);
		vm.ingredients = data;
	};

	vm.IngredientsGetFailure = function (data) {
		$log.log(data.data);
		var errorMsg = "This is odd...";
		if(data.data.errmsg)
			if (data.data.errmsg.indexOf("name") > -1)
				errorMsg = "Seems like the ingredient already exists";
		if (data.data.message)
			errorMsg = "This ingredient doesn't exist";
		toastr.error(errorMsg, 'Woops...', {timeOut : 300});
	};

	IngredientService
		.ingredients
		.query()
		.$promise
		.then(vm.IngredientsGetSuccess, vm.IngredientsGetFailure);

	vm.searchIngredientsByName = function() {
		if (!$scope.search)
			IngredientService
			.ingredients
			.query()
			.$promise
			.then(vm.IngredientsGetSuccess, vm.IngredientsGetFailure);
		else
			IngredientService
				.ingredient_name
				.query({name : $scope.search})
				.$promise
				.then(vm.IngredientsGetSuccess, vm.IngredientsGetFailure);
	};

}

})();