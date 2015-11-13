(function() {
'use strict';

angular.module('NourritureControllers')
	.controller('IngredientPageController', IngredientPageController);

IngredientPageController.$inject = ["$scope", "IngredientService", 'toastr', '$state', "$log", "$stateParams"];

function IngredientPageController($scope, IngredientService, toastr, $state, $log, $stateParams)
{
	var vm = this;

	vm.IngredientFetchSuccess = function (data) {
		$log.log(data);
	};

	vm.IngredientFetchFailure = function (data) {
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

	IngredientService
		.ingredient_id
		.get({"id" : $stateParams.id})
		.$promise
		.then(vm.IngredientFetchSuccess, vm.IngredientFetchFailure);
}

})();