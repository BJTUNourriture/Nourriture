(function() {
'use strict';

angular
	.module('NourritureControllers')
	.controller('MainController', MainController);

	MainController.$inject = ['$sessionStorage', '$localStorage', "$log"];

	function MainController($sessionStorage, $localStorage, $log)
	{
		var vm = this;

		vm.authenticated = ($sessionStorage.key || $localStorage.key) ? true : false;
		$log.log(vm.authenticated);
	}

})();
