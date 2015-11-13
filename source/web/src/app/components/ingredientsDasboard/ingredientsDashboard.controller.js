(function() {
'use strict';

angular.module('NourritureControllers')
	.controller('IngredientsDashboardController', IngredientsDashboardController);

IngredientsDashboardController.$inject = ["$scope", "IngredientService", 'SearchService', 'toastr',"$log", "$mdDialog", "$document", "$state"];

function IngredientsDashboardController($scope, IngredientService, SearchService, toastr, $log, $mdDialog, $document, $state)
{
	var vm = this;

	$log.log("innit");

	//Table specs
	vm.table = {
		name : '',
		metadata : {
			"items": 10,
			"page" : 1
		}
	};

	vm.selected_ingredients = [];

	vm.deferred;

	vm.IngredientsGetSuccess = function (data) {
		$log.log(data);
		vm.table.metadata.total = data.metadata.total;
		vm.ingredients = data.ingredients;
		if (vm.table.order)
			if (vm.table.order.order == "desc")
				if (vm.table.order.field[0] != "-")
					vm.table.order.field = "-" + vm.table.order.field;
	};

	vm.IngredientsGetFailure = function (data) {
		$log.log(data.data);
		var errorMsg = "This is odd...";
		if(data.data.errmsg)
			if (data.data.errmsg.indexOf("name") > -1)
				errorMsg = "Seems like the ingredient already exists";
		if (data.data.message)
			errorMsg = "This ingredient doesn't exist";
		toastr.error(errorMsg, 'Woops...', {timeOut : 300});
	};

	vm.IngredientsDeleteSuccess = function (data) {
		$log.log(data);
		toastr.success("Ingredient Deleted Successfully", "Success", {timeOut : 300});
		vm.searchIngredientsByName();
	};

	vm.IngredientsDeleteFailure = function (data) {
		$log.log(data.data);
		var errorMsg = "This is odd...";
		if(data.data.errmsg)
			if (data.data.errmsg.indexOf("name") > -1)
				errorMsg = "Seems like the ingredient already exists";
		if (data.data.message)
			errorMsg = "This ingredient doesn't exist";
		toastr.error(errorMsg, 'Woops...', {timeOut : 300});
	};

	//Init data
	vm.deferred = SearchService
		.ingredients
		.save(vm.table)
		.$promise;
	
	vm.deferred.then(vm.IngredientsGetSuccess, vm.IngredientsGetFailure);

	vm.deleteIngredient = function(ingredient) {
		IngredientService
		.ingredient_id
		.delete({id : ingredient._id})
		.$promise
		.then(vm.IngredientsDeleteSuccess, vm.IngredientsDeleteFailure);
	}

	vm.searchIngredientsByName = function() {
		vm.table.name = $scope.search;
		vm.deferred = SearchService
			.ingredients
			.save(vm.table)
			.$promise;
		vm.deferred.then(vm.IngredientsGetSuccess, vm.IngredientsGetFailure);			
	};

	//Table functions
	vm.tableOnOrderChange = function(order) {
		if (order[0] == '-')
		{
			vm.table.order.order = "desc";
			vm.table.order.field = vm.table.order.field.slice(1);
		}
		else
			vm.table.order.order = "asc";
		$log.log(vm.table);
		vm.deferred = SearchService
			.ingredients
			.save(vm.table)
			.$promise;
		vm.deferred.then(vm.IngredientsGetSuccess, vm.IngredientsGetFailure);	
	};

	vm.tableOnPaginationChange = function(page, limit) {
		vm.table.metadata.page = page;
		vm.table.metadata.items = limit;
		vm.deferred = SearchService
			.ingredients
			.save(vm.table)
			.$promise;
		vm.deferred.then(vm.IngredientsGetSuccess, vm.IngredientsGetFailure);		
	};

	//Dialogs
	vm.infosIngredientDialog = function(event, ingredient) {
		$mdDialog.show({
		controller: vm.dialogController,
		controllerAs : "infosIngredient",
		templateUrl: 'app/templates/dialogTemplates/ingredientInfos.tmpl.html',
		parent: angular.element($document.body),
		locals : {ingredient : ingredient},
		bindToController : true,
		targetEvent: event,
		clickOutsideToClose:true
		})
	};

	vm.deleteIngredientDialog = function(event, ingredient) {
		var confirm = $mdDialog.confirm()
					.title('Are you sure you want to delete this ingredient ?')
					.ok('Delete ingredient')
					.cancel('Not really actually')
					.targetEvent(event);

		$mdDialog.show(confirm).then(function() {vm.deleteIngredient(ingredient)}, function(){});
	};

	//Controller for infosIngredientDialog
	vm.dialogController = function($mdDialog) {
		var vm = this;

		vm.hide = function () {
			$mdDialog.hide();
		}

		vm.goToIngredientPage = function(id_ingredient) {
			$state.go("main.homepage");
		}
	}

}

})();