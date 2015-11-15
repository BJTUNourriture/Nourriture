(function() {
'use strict';

angular.module('NourritureControllers')
	.controller('CreateGroupController', CreateGroupController);

CreateGroupController.$inject = ["$scope", "GroupService", 'TagsService', 'toastr',"$log"];

function CreateGroupController($scope, GroupService, TagsService, toastr, $log)
{

}

})();