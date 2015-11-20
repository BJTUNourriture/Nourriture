(function() {
'use strict';

angular.module('NourritureControllers')
	.controller('CreateRecipeController', CreateRecipeController);

CreateRecipeController.$inject = ["$scope", "RecipeService", 'TagsService', 'toastr',"$log", 'UploadService'];

function CreateRecipeController($scope, RecipeService, TagsService, toastr, $log, UploadService)
{
	var vm = this;
	vm.defaultThumbSrc = "../../assets/images/recipesdummy/plus.png";
	vm.difficulty = 0;
	vm.price = 0;
	vm.isHoverDifficulty = [false, false, false];
	vm.isHoverPrice = [false, false, false];

	$log.log("innit");

	vm.upload = function(file) {
		UploadService.recipe_thumbnail_url(file)
		.then(vm.RecipeThumbnailUploadSuccess, vm.RecipeThumbnailUploadFailure)
	}

	vm.submit = function() {
		RecipeService
			.recipes
			.save({"title" : $scope.title, "description" : $scope.description,  "author_id" : "561fc840d6c25173533e267f",  "author_name" : "kek man", "ingredients" : {"id_ingredient" : "689ed840d6c25173533g895","name_ingredient" : "Pumpkin","amount_ingredient" : 100}})
			.$promise
			.then(vm.RecipeCreateSuccess, vm.RecipeCreateFailure);
	};

	vm.RecipeThumbnailUploadSuccess = function (data) {
		$log.log(data.message);
		toastr.success('Look how beautiful it is!', 'Picture Uploaded!');
	};

	vm.RecipeThumbnailUploadFailure = function (data) {
		$log.log(data.data);
		var errorMsg = "This is odd...";
		if (data.data.errmsg.indexOf("name") > -1)
			errorMsg = "Seems like the Recipe already exists";
		toastr.error(errorMsg, 'Woops...');
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

	vm.stateIsHoverDifficulty = function (difficulty, state) {
		vm.isHoverDifficulty[difficulty] = state;
	};

	vm.stateIsHoverPrice = function (price, state) {
		vm.isHoverPrice[price] = state;
	};

}

})();
