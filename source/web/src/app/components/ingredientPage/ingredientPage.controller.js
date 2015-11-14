(function() {
'use strict';

angular.module('NourritureControllers')
	.controller('IngredientPageController', IngredientPageController);

IngredientPageController.$inject = ["$scope", "IngredientService", 'toastr', '$state', "$log", "$stateParams", '$mdDialog', '$document'];

function IngredientPageController($scope, IngredientService, toastr, $state, $log, $stateParams, $mdDialog, $document)
{
	var vm = this;

	vm.IngredientFetchSuccess = function (data) {
		$log.log(data);
		vm.ingredient = data;
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