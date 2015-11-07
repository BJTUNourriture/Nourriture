(function() {
'use strict';

angular.module('NourritureControllers')
	.controller('RegisterController', RegisterController);

RegisterController.$inject = ["$scope", "UserService", "$log"];

function RegisterController($scope, UserService, $log)
{
	var vm = this;

	vm.submit = function() {
		UserService
			.Users
			.save({"username" : $scope.username, "password" : $scope.password, "email" : $scope.email})
			.$promise
			.then(vm.userRegisteredSuccess, vm.userRegisteredFailure);
	};

	vm.userRegisteredSuccess = function (data) {
		$log.log(data.message);
	};

	vm.userRegisteredFailure = function (data) {
		$log.log(data);
	};
}

})();