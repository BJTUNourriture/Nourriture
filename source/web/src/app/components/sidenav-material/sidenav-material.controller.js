(function() {
'use strict';

angular.module('NourritureControllers', ['ngMaterial'])
	.controller('SidenavController', SidenavController);

SidenavController.$inject = ["$scope", "$http","$timeout", "$mdSidenav", "$log"];

function SidenavController($scope, $http, $timeout, $mdSidenav, $log)
{
	var vm = this;

	//Menu icon initialization
	vm.menuIconOut = "menu";
	vm.menuIconIn = "menu";

	//Sinenav Item Informations
	$http.get("configs/sidenavConfig.json")
		.success(function(res) {
			vm.sidenavItems = res;
			console.log(res);
		})
		.error(function(res) {
			$log.log("no config/sidenavConfig.json found! Res data : " + res.data);
			vm.sidenavItems = [{"name" : "CONFIG NOT FOUND", "icon" : "error"}];
		})

	vm.leftMenuToggle = function() {
		$mdSidenav('left').toggle();
	};
}

})();