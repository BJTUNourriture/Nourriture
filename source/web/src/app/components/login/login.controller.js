(function() {
'use strict';

angular.module('NourritureControllers')
	.controller('LoginController', LoginController);

LoginController.$inject = ["$scope", "UserService", 'toastr', '$state', '$sessionStorage', '$localStorage', "$log"];

function LoginController($scope, UserService, toastr, $state, $sessionStorage, $localStorage, $log)
{
	var vm = this;

	vm.submit = function() {
		UserService
			.user_signin
			.save({"username" : $scope.username, "password" : $scope.password})
			.$promise
			.then(vm.userLoginSuccess, vm.userLoginFailure);
	};

	vm.userLoginSuccess = function (data) {
		$log.log(data);
		if ($scope.remember_me == true)
		{
			$localStorage.key = data["key"];
			$localStorage.user_id = data["user_id"];
			$localStorage.name = data["user_name"];
		}
		else
		{
			$sessionStorage.key = data["key"];
			$sessionStorage.user_id = data["user_id"];
			$sessionStorage.name = data["user_name"];
		}
		UserService.set_username(data["user_name"]);
		$state.go("main.homepage");
	};

	vm.userLoginFailure = function (data) {
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
}

})();