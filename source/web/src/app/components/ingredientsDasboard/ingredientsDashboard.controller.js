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

	vm.IngredientsDeleteSuccess = function (data) {
		$log.log(data);
		toastr.error("Ingredient Deleted Successfully", "Success", {timeOut : 300});
		vm.searchIngredientsByName();
	};

	vm.IngredientsDeleteFailure = function (data) {
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
	IngredientService
		.ingredients
		.query()
		.$promise
		.then(vm.IngredientsGetSuccess, vm.IngredientsGetFailure);

	vm.deleteIngredient = function(ingredient) {
		IngredientService
		.ingredient_id
		.delete({id : ingredient._id})
		.$promise
		.then(vm.IngredientsDeleteSuccess, vm.IngredientsDeleteFailure);
	}

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