(function() {
'use strict';

angular.module('NourritureControllers')
	.controller('CreateRecipeController', CreateRecipeController);

CreateRecipeController.$inject = ["$scope", "RecipeService", 'TagsService', 'toastr',"$log", "$mdDialog", "$document"];

function CreateRecipeController($scope, RecipeService, TagsService, toastr, $log, $mdDialog, $document)
{
	var vm = this;

	$log.log("innit");

	vm.submit = function() {
		$log.log("submit");
		RecipeService
			.Recipes
			.save({"title" : $scope.title, "description" : $scope.description,  "author_id" : "561fc840d6c25173533e267f",  "author_name" : "kek man"})
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
