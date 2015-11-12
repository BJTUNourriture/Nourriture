(function() {
'use strict';

angular.module('NourritureControllers')
	.controller('IngredientsDashboardController', IngredientsDashboardController);

IngredientsDashboardController.$inject = ["$scope", "IngredientService", 'toastr',"$log", "$mdDialog"];

function IngredientsDashboardController($scope, IngredientService, toastr, $log, $mdDialog)
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
		toastr.success("Ingredient Deleted Successfully", "Success", {timeOut : 300});
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

	//Dialogs
	vm.infosIngredientDialog = function(event, ingredient) {
		var confirm = $mdDialog.confirm()
			.title(ingredient.name)
			.content("Proteins : "+ ingredient.proteins+" Carbohydrates : "+ingredient.carbohydrates+" Fats : "+ingredient.fat)
			.ok("Go to the Ingredient's page")
			.clickOutsideToClose(true)
			.targetEvent(event);


		$mdDialog.show(confirm);
	};

	vm.deleteIngredientDialog = function(event, ingredient) {
		var confirm = $mdDialog.confirm()
					.title('Are you sure you want to delete this ingredient ?')
					.ok('Delete ingredient')
					.cancel('Not really actually')
					.targetEvent(event);

		$mdDialog.show(confirm).then(function() {vm.deleteIngredient(ingredient)}, function(){});
	};

}

})();