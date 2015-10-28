(function() {
'use strict';

angular.module('NourritureControllers', ['ngMaterial'])
	.controller('SidenavController', SidenavController);

SidenavController.$inject = ["$scope", "$timeout", "$mdSidenav", "$log"];

function SidenavController($scope, $timeout, $mdSidenav, $log)
{
	var vm = this;

	vm.openLeftMenu = function() {
		$mdSidenav('left').toggle();
	};
}

})();