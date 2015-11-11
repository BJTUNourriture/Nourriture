(function() {
'use strict';

angular.module('NourritureControllers')
	.controller('CreateIngredientController', CreateIngredientController);

CreateIngredientController.$inject = ["$scope", "IngredientService", 'toastr',"$log"];

function CreateIngredientController($scope, IngredientService, toastr, $log)
{
	var vm = this;

	$log.log("innit");

	vm.submit = function() {
		$log.log("innit");
		IngredientService
			.ingredients
			.save({"name" : $scope.name, "description" : $scope.description, "fat" : $scope.fat, "carbohydrates" : $scope.carbohydrates, "proteins" : $scope.proteins})
			.$promise
			.then(vm.IngredientCreateSuccess, vm.IngredientCreateFailure);
	};

	vm.IngredientCreateSuccess = function (data) {
		$log.log(data.message);
		toastr.success('You can now access your new ingredient.', 'Ingredient Created!');
	};

	vm.IngredientCreateFailure = function (data) {
		$log.log(data.data);
		var errorMsg = "This is odd...";
		if (data.data.errmsg.indexOf("name") > -1)
			errorMsg = "Seems like the ingredient already exists";
		toastr.error(errorMsg, 'Woops...');
	};

}

})();