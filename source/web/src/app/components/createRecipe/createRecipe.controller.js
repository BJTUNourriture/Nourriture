(function() {
'use strict';

angular.module('NourritureControllers')
	.controller('CreateRecipeController', CreateRecipeController);

CreateRecipeController.$inject = ["$scope", "RecipeService", 'TagsService', 'toastr',"$log", 'UploadService', "SearchService", "TypesService", 'IngredientService', "$mdDialog", "$document", "$sessionStorage", "$localStorage"];

/**@ngInject*/
function CreateRecipeController($scope, RecipeService, TagsService, toastr, $log, UploadService, SearchService, TypesService, IngredientService, $mdDialog, $document, $localStorage, $sessionStorage)
{
	var vm = this;
	vm.defaultThumbSrc = "../../assets/images/recipesdummy/plus.png";
	vm.difficulty = 0;
	vm.price = 0;
	vm.isHoverDifficulty = [false, false, false];
	vm.isHoverPrice = [false, false, false];
	vm.createRecipe = [];
	vm.pictures = [];
	vm.file = [];

	//Table vars
	vm.ingredients = [];
	vm.selected_ingredients = [];

	vm.htmlVariable = "";

	//Autocomplete vars
	vm.ingredientSearch = {
		name : '',
		metadata : {
			"items": 10,
			"page" : 1
		}
	};

	$log.log("innit");

	vm.upload = function(file) {
		$log.log("in upload");
		UploadService.recipe_thumbnail_url(file)
		.then(vm.RecipeThumbnailUploadSuccess, vm.RecipeThumbnailUploadFailure)
	}

	vm.sendToBack = function() {
		if (vm.pictures.length >= vm.file.length)
		{
			var data = {"title" : $scope.title, "description" : vm.description, "time_preparation" : vm.time , "difficulty" : vm.difficulty, "average_price" : vm.price, "author_id" : $localStorage.user_id || $sessionStorage.user_id,  "author_name" : $localStorage.name || $sessionStorage.name, "ingredients" : vm.ingredients, "pictures" : vm.pictures};
			$log.log(data);
			RecipeService
				.recipes
				.save(data)
				.$promise
				.then(vm.RecipeCreateSuccess, vm.RecipeCreateFailure);
		}
	}

	vm.submit = function() {
		vm.pictures = [];
		if (vm.ingredients.length <= 0)
		{
			toastr.error("Please add some ingredients", "Woops...");
			return;
		}
		if (vm.file.length == 0)
		{
			vm.pictures.push({"thumbnail_url" : "assets/images/recipesdummy/no_image.png"});
			vm.sendToBack();
		}
		for (var i = 0; i < vm.file.length; i++)
			vm.upload(vm.file[i]);
	};

	vm.RecipeThumbnailUploadSuccess = function (data) {
		vm.pictures.push({"thumbnail_url" : data.data.message});
		vm.sendToBack();
	};

	vm.RecipeThumbnailUploadFailure = function (data) {
		$log.log(data.data);
		var errorMsg = "This is odd...";
		if (data.data.errmsg.indexOf("name") > -1)
			errorMsg = "Seems like we had an issue uploading your picture...";
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

	vm.recapAmount = function(field) {
		var amount = 0;

		if (vm.ingredients)
		{
			if (field == "amount")
				for(var i = 0; i < vm.ingredients.length; i++)
					amount += vm.ingredients[i][field];
			else
				for(var i2 = 0; i2 < vm.ingredients.length; i2++)
					amount += vm.ingredients[i2][field] * (vm.ingredients[i2]["amount"] / 100);
		}
		return (amount);
	};

	vm.deleteIngredients = function() {
		for (var i=0; i < vm.selected_ingredients.length; i++)
		{
			var i2 = 0;
			while (vm.ingredients[i2].name != vm.selected_ingredients[i].name)
				i++;
			vm.ingredients.splice(i2, 1);
		}
	}

	vm.createTypeDialog = function(event) {
			$mdDialog.show({
			controller : vm.CreateTypedialogController,
			controllerAs : 'createType',
			templateUrl: 'app/templates/dialogTemplates/typesCreate.tmpl.html',
			parent: angular.element($document.body),
			bindToController : true,
			targetEvent: event,
			clickOutsideToClose:true
			})
		};

		//Controller for createTypeDialog
		vm.CreateTypedialogController = function($mdDialog) {
			var vm = this;

			vm.TypeCreateSuccess = function (data) {
				$log.log(data.message);
				toastr.success('You can now access your new Type.', 'Type Created!');
			};

			vm.TypeCreateFailure = function (data) {
				$log.log(data.data);
				var errorMsg = "This is odd...";
				if (data.data.errmsg.indexOf("name") > -1)
					errorMsg = "Seems like the type already exists";
				toastr.error(errorMsg, 'Woops...');
			};

			vm.submit = function() {
				$log.log(TypesService)
				TypesService
					.types
					.save({"name" : vm.name, "category" : vm.category})
					.$promise
					.then(vm.TypeCreateSuccess, vm.TypeCreateFailure);
			}

			vm.hide = function () {
				$mdDialog.hide();
			}
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
			if (vm.ingredients)
			{
				for (var i=0; i < vm.ingredients.length; i++)
				{
					if (vm.ingredients[i].name == vm.selectedItem.name)
					{
						toastr.error("This ingredient is already present in the table", "Woops...");
						return ;
					}
				}
			}
			vm.selectedItem["id_ingredient"] = vm.selectedItem["_id"];
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
