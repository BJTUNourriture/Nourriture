(function() {
'use strict';

angular.module('NourritureControllers')
	.controller('LogoutController', LogoutController);

LogoutController.$inject = ['$state', '$sessionStorage', '$localStorage', "$log"];

function LogoutController($state, $sessionStorage, $localStorage, $log)
{
	$localStorage.$reset();
	$sessionStorage.$reset();
	$log.log("Logged Out");
	$state.go("main.homepage");
}

})();