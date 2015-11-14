(function() {
'use strict';

angular.module('NourritureControllers')
	.controller('CreateRecipeController', CreateRecipeController);

CreateRecipeController.$inject = ["$scope", "RecipeService", 'TagsService', 'toastr',"$log"];

function CreateRecipeController($scope, RecipeService, TagsService, toastr, $log)
{
	var vm = this;

	$log.log("innit");


	vm.submit = function() {
		RecipeService
			.recipes
			.save({"title" : $scope.title, "description" : $scope.description,  "author_id" : "561fc840d6c25173533e267f",  "author_name" : "kek man", "ingredients" : {"id_ingredient" : "689ed840d6c25173533g895","name_ingredient" : "Pumpkin","amount_ingredient" : 100}})
			.$promise
			.then(vm.RecipeCreateSuccess, vm.RecipeCreateFailure);
	};

	vm.RecipeCreateSuccess = function (data) {
		$log.log(data.message);
		toastr.success('You can now access your new Recipe.', 'Recipe Created!');
	};

	vm.RecipeCreateFailure = function (data) {
		$log.log(data.data);
		var errorMsg = "This is odd...";
		if (data.data.errmsg.indexOf("name") > -1)
			errorMsg = "Seems like the Recipe already exists";
		toastr.error(errorMsg, 'Woops...');
	};
}

})();
