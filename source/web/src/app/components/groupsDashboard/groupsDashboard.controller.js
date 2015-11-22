(function() {
'use strict';

angular.module('NourritureControllers')
	.controller('GroupsDashboardController', GroupsDashboardController);

GroupsDashboardController.$inject = ["$scope","$log", "SearchService", "toastr"];

function GroupsDashboardController($scope, $log, SearchService, toastr)
{
	var vm = this;

	vm.groups = []
	vm.retrievingGroups = true;

	//Table specs
	vm.table = {
		title : '',
		metadata : {
			"items": 10,
			"page" : 1
		}
	};

	vm.GroupsGetSuccess = function(data) {
		$log.log(data);
		vm.groups = data.groups;
		vm.retrievingGroups = false;
	}

	vm.GroupsGetFailure = function (data) {
		$log.log(data.data);
		var errorMsg = "This is odd...";
		if(data.data.errmsg)
			if (data.data.errmsg.indexOf("name") > -1)
				errorMsg = "Seems like the group already exists";
		if (data.data.message)
			errorMsg = "This group doesn't exist";
		toastr.error(errorMsg, 'Woops...', {timeOut : 300});
	};

	//Init data
	SearchService
	.groups
	.save(vm.table)
	.$promise
	.then(vm.GroupsGetSuccess, vm.GroupsGetFailure)

	//Search by name
	vm.searchGroups = function ()
	{
		$log.log('ta mere')
		vm.retrievingGroups = true;
		vm.table.title = $scope.search;
		vm.groups = [];
		SearchService
		.groups
		.save(vm.table)
		.$promise
		.then(vm.GroupsGetSuccess, vm.GroupsGetFailure);
	}

}

})();
