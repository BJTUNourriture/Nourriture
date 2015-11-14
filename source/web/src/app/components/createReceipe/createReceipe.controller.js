(function() {
'use strict';

angular.module('NourritureControllers')
	.controller('CreateReceipeController', CreateReceipeController);

CreateReceipeController.$inject = ["$scope", "ReceipeService", 'TagsService', 'toastr',"$log", "$mdDialog", "$document"];

function CreateReceipeController($scope, ReceipeService, TagsService, toastr, $log, $mdDialog, $document)
{
	var vm = this;

	$log.log("innit");

	vm.submit = function() {
		$log.log("submit");
		ReceipeService
			.receipes
			.save({"title" : $scope.name, "description" : $scope.description,  "author_id" : "561fc840d6c25173533e267f",  "author_name" : "kek man"})
			.$promise
			.then(vm.ReceipeCreateSuccess, vm.ReceipeCreateFailure);
	};

	vm.ReceipeCreateSuccess = function (data) {
		$log.log(data.message);
		toastr.success('You can now access your new receipe.', 'Receipe Created!');
	};

	vm.ReceipeCreateFailure = function (data) {
		$log.log(data.data);
		var errorMsg = "This is odd...";
		if (data.data.errmsg.indexOf("name") > -1)
			errorMsg = "Seems like the receipe already exists";
		toastr.error(errorMsg, 'Woops...');
	};
}

})();
