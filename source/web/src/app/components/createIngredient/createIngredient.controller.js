(function() {
'use strict';

angular.module('NourritureControllers')
	.controller('CreateIngredientController', CreateIngredientController);

CreateIngredientController.$inject = ["$scope", "IngredientService", 'TagsService', 'toastr',"$log"];

function CreateIngredientController($scope, IngredientService, TagsService, toastr, $log)
{
	var vm = this;

	$log.log("innit");

	//Vars for Chips
	vm.tags_ingredient = [];
	vm.selectedItemChip = null;
	vm.searchTextChip = null;
	vm.itemsAutocomplete = [];

	vm.submit = function() {
		$log.log("innit");
		IngredientService
			.ingredients
			.save({"name" : $scope.name, "description" : $scope.description, "calories":$scope.calories, "fat" : $scope.fat, "carbohydrates" : $scope.carbohydrates, "proteins" : $scope.proteins})
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

	vm.TagsGetFailure = function (data) {
		$log.log(data.data);
		var errorMsg = "This is odd...";
		if (data.data.errmsg.indexOf("name") > -1)
			errorMsg = "Seems like the ingredient already exists";
		toastr.error(errorMsg, 'Woops...');
	};

	vm.TagsGetSuccess = function (data) {
		$log.log(data);
		vm.tags_ingredient = data;
	};

	vm.TagsGetNameFailure = function (data) {
		$log.log(data.data);
		var errorMsg = "Tag not found...";
		toastr.error(errorMsg, 'Woops...');
		vm.itemsAutocomplete = [];
		return (vm.itemsAutocomplete);
	};

	vm.TagsGetNameSuccess = function (data) {
		$log.log(data);
		vm.itemsAutocomplete = data;
		return (vm.itemsAutocomplete);
	};

	//Chips functions
	vm.transformChip = function(chip) {
		if (angular.isObject(chip))
			return chip;
		if (chip._id === undefined)
			return {
				name : chip
			}
		else
		{
			$log.log(vm.tags_ingredient);
			for(var i=0; i < vm.tags_ingredient.length; i++)
				if (vm.tags_ingredient[i].name == chip.name)
					return ;
			return {
				name : chip.name
			}
		}
	}

	vm.selectedItemChangeChip = function () {

	}

	vm.getNameTags = function(name) {
		$log.log("innit");
		return (TagsService
			.tags_name
			.query({name : name})
			.$promise
			.then(vm.TagsGetNameSuccess, vm.TagsGetNameFailure));
	}

}

})();