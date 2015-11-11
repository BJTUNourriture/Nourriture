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
		if (data.data.message.indexOf("username") > -1)
			errorMsg = "Seems like you typed a  wrong username :(";
		if (data.data.message.indexOf("password") > -1)
			errorMsg = "Seems like you typed a  wrong password :(";
		if (data.data.message.indexOf("email") > -1)
			errorMsg = "Your email hasn't been verified yet, please verify it ;)";
		toastr.error(errorMsg, 'Woops...');
	};

}

})();