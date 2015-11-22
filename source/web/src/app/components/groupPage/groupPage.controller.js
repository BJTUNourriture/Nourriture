(function() {
'use strict';

angular.module('NourritureControllers')
	.controller('GroupPageController', GroupPageController);

GroupPageController.$inject = ["$scope", "$rootScope", "GroupService", "UserService", 'toastr', '$state', "$log", "$stateParams", "$localStorage", "$sessionStorage"];

function GroupPageController($scope, $rootScope, GroupService, UserService, toastr, $state, $log, $stateParams, $localStorage, $sessionStorage)
{
	var vm = this;

	vm.GroupFetchSuccess = function (data) {
		$log.log(data);
		vm.group = data;
		vm.userIsIn = 0;
		vm.userIsOwner = 0;
		for (var i = 0; i != data.users.length; i++) {
			if (data.users[i].user_id === ($localStorage.user_id || $sessionStorage.user_id)) {
				vm.userIsIn = 1;
				if (data.users[i].access.name === "Admin")
					vm.userIsOwner = 1;
			}
		}
	};

	vm.GroupFetchFailure = function (data) {
		$log.log(data.data);
		var errorMsg = "This is odd...";
		toastr.error(errorMsg, 'Woops...');
	};

	vm.registerUser = function() {
		GroupService.add_user
		.update({"group_id": vm.group._id, "user_id": $localStorage.user_id})
		.$promise
		.then(vm.getGroup());

		UserService.addGroupToUser
		.update({id: $localStorage.user_id, "group_id": vm.group._id, "group_name": vm.group.name})
		.$promise;
		vm.userIsIn = 1;
	}

	vm.unregisterUser = function() {
		GroupService.remove_user
		.update({"group_id": vm.group._id, "user_id": $localStorage.user_id})
		.$promise
		.then(vm.getGroup());

		UserService.removeGroupToUser
		.update({id: $localStorage.user_id, "group_id": vm.group._id, "group_name": vm.group.name})
		.$promise;

		vm.userIsIn = 0;
		vm.userIsOwner = 0;
	}

	vm.getGroup = function() {
		GroupService
			.group_id
			.get({"id" : $stateParams.id})
			.$promise
			.then(vm.GroupFetchSuccess, vm.GroupFetchFailure);
	}

	vm.getGroup();
}

})();