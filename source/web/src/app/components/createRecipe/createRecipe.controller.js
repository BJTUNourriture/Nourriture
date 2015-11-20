(function() {
'use strict';

angular.module('NourritureControllers')
	.controller('CreateRecipeController', CreateRecipeController);

CreateRecipeController.$inject = ["$scope", "RecipeService", 'TagsService', 'toastr',"$log", 'UploadService', "SearchService", 'IngredientService', "$mdDialog", "$document"];

/**@ngInject*/
function CreateRecipeController($scope, RecipeService, TagsService, toastr, $log, UploadService, SearchService, IngredientService, $mdDialog, $document)
{
	var vm = this;
	vm.defaultThumbSrc = "../../assets/images/recipesdummy/plus.png";
	vm.difficulty = 0;
	vm.price = 0;
	vm.isHoverDifficulty = [false, false, false];
	vm.isHoverPrice = [false, false, false];
	vm.createRecipe = [];

	//Table vars
	vm.ingredients = [];
	vm.selected_ingredients = [];

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

	vm.recapAmount = function() {
		var amount = 0;

		if (vm.ingredients)
		{
			for(var i = 0; i < vm.ingredients.length; i++)
				amount += vm.ingredients[i].amount
		}
		return (amount);
	}

	//Dialog functions
	vm.AddIngredientDialog = function(event) {
		$mdDialog.show({
		controller : vm.AddIngredientdialogController,
		controllerAs : 'addIngredient',
		templateUrl: 'app/templates/dialogTemplates/ingredientAddRecipe.tmpl.html',
		parent: angular.element($document.body),
		locals : {ingredients : vm.ingredients},
		bindToController : true,
		targetEvent: event,
		clickOutsideToClose:true
		}).then(function(data) { vm.ingredients.push(data) });
	};

	//Controller for createTagDialog
	vm.AddIngredientdialogController = function($mdDialog) {
		var vm = this;

		//Autocomplete vars
		vm.ingredientSearch = {
			name : '',
			metadata : {
				"items": 10,
				"page" : 1
			}
		};

		vm.IngredientGetAddSuccess = function (data) {
			$log.log(data.message);
			toastr.success('You can now access your new Tag.', 'Tag Created!');
		};

		vm.IngredientsGetAddFailure = function (data) {
			$log.log(data.data);
			var errorMsg = "This is odd...";
			if (data.data.errmsg.indexOf("name") > -1)
				errorMsg = "Seems like the tag already exists";
			toastr.error(errorMsg, 'Woops...');
		};

		vm.IngredientsGetNameFailure = function (data) {
			$log.log(data.data);
			vm.itemsAutocomplete = [];
			return (vm.itemsAutocomplete);
		};

		vm.IngredientsGetNameSuccess = function (data) {
			$log.log(data);
			vm.itemsAutocomplete = data;
			return (vm.itemsAutocomplete.ingredients);
		};

		vm.getNameIngredients = function () {

		return (SearchService
			.ingredients
			.save(vm.ingredientSearch)
			.$promise
			.then(vm.IngredientsGetNameSuccess, vm.IngredientsGetNameFailure));
		}

		vm.submit = function() {
			$log.log("innit");
			IngredientService
				.ingredient_name
				.get({"name" : vm.name})
				.$promise
				.then(vm.IngredientGetAddSuccess, vm.IngredientsGetAddFailure);
		}

		vm.hide = function () {
			$log.log(vm.selectedItem);
			if (vm.selectedItem)
			{
				vm.selectedItem.amount = vm.amount;
				$mdDialog.hide(vm.selectedItem);
			}
		}
	}

}

})();
