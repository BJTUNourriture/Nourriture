(function() {
'use strict';

angular.module('NourritureControllers')
	.controller('CreateIngredientController', CreateIngredientController);

CreateIngredientController.$inject = ["$scope", "IngredientService", 'TagsService', 'toastr',"$log", "$mdDialog", "$document"];

function CreateIngredientController($scope, IngredientService, TagsService, toastr, $log, $mdDialog, $document)
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
			.save({"name" : $scope.name, "description" : $scope.description, "calories":$scope.calories, "fat" : $scope.fat, "carbohydrates" : $scope.carbohydrates, "proteins" : $scope.proteins, "tags" : vm.tags_ingredient})
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
		if (angular.isUndefined(chip._id))
			return {
				name : chip
			}
		else
			return {
				name : chip.name
		}
	}

	vm.getNameTags = function(name) {
		$log.log("innit");
		return (TagsService
			.tags_name
			.query({name : name})
			.$promise
			.then(vm.TagsGetNameSuccess, vm.TagsGetNameFailure));
	}

	//Dialog functions
	vm.infosTagDialog = function(event, tag) {
		$mdDialog.show({
		controller : vm.dialogController,
		controllerAs : 'infosTag',
		templateUrl: 'app/templates/dialogTemplates/tagsInfos.tmpl.html',
		parent: angular.element($document.body),
		locals : {tag : tag},
		bindToController : true,
		targetEvent: event,
		clickOutsideToClose:true
		})
	};

	//Controller for infosTagDialog
	vm.dialogController = function($mdDialog) {
		var vm = this;

		vm.hide = function () {
			$mdDialog.hide();
		}
	}


}

})();