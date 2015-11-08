(function() {
'use strict';

angular.module('NourritureControllers')
	.controller('RegisterController', RegisterController);

RegisterController.$inject = ["$scope", "UserService", 'toastr', "$log"];

function RegisterController($scope, UserService, toastr, $log)
{
	var vm = this;

	vm.submit = function() {
		UserService
			.user_register
			.save({"username" : $scope.username, "password" : $scope.password, "email" : $scope.email})
			.$promise
			.then(vm.userRegisteredSuccess, vm.userRegisteredFailure);
	};

	vm.userRegisteredSuccess = function (data) {
		$log.log(data.message);
		toastr.success('Congratulation on registrating to Nourriture ! Now please check your emails to confirm your email address :)', 'One last Step !');
	};

	vm.userRegisteredFailure = function (data) {
		$log.log(data.data);
		var errorMsg = "This is odd...";
		if (data.data.errmsg.indexOf("users.$username_1 dup key") > -1)
			errorMsg = "The username is already taken...";
		if (data.data.errmsg.indexOf("users.$email_1 dup key") > -1)
			errorMsg = "The email is already taken...";
		toastr.error('Seems like something went wrong with your registration :( ' + errorMsg, 'Woops...');
	};
}

})();