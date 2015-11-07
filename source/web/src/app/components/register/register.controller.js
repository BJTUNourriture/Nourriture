(function() {
'use strict';

angular.module('NourritureControllers')
	.controller('RegisterController', RegisterController);

RegisterController.$inject = ["$scope", "UserService", "$log"];

function RegisterController($scope, UserService, $log)
{
	var vm = this;

	vm.submit = function() {
		UserService.rootEndpointUsers.save({"usename" : $scope.username, "password" : $scope.password, "email" : $scope.email}, vm.userRegisteredSuccess, vm.userRegisteredFailure);
		$log.log("kek");
	};

	vm.userRegisteredSuccess = function (data) {
		$log.log(data);
	};

	vm.userRegisteredFailure = function (error) {
		$log.log(error);
	};
}

})();