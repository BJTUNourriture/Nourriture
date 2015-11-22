(function () {

    'use strict';

    angular
      .module('NourritureControllers')
      .controller('followersUserProfileController', followersUserProfileController);

    followersUserProfileController.$inject = ["$scope", '$log', '$rootScope', '$timeout'];

    function followersUserProfileController($scope, $log, $rootScope, $timeout) {

        var vm = this;

        vm.followerList = [{ username: "thomas", description: "I love sea food and meat", id: "10" }, { username: "vincent", description: "I'm 23 and i love pizzas!", id: "30" }, { id: "11205", username: "top chef", description: "I'm a chef in a 3-star restaurant in Las Vegas" }];
        vm.follower = [];

        var getFollower = function () {
            $log.log("i'm passing in getFollower");
            vm.data = $rootScope.UserProfile;

            //vm.followerList = vm.data.followed_by;
        };

        //vm.getFollowersProfile = function () {
        //    for (var i = 0; i < vm.data.followed_by.length; i++) {
        //        if (vm.data.followed_by[i] != null) {
        //            UserService
        //              .user_get_username
        //              .get(vm.data.followed_by[i].username)
        //              .$promise
        //              .then(vm.getFollowerSuccess, vm.getFollowerError);
        //        }
        //    }
        //};

        //vm.getFollowerSuccess = function (data) {
        //    $log.log("get follower", data);
        //    vm.follower[vm.follower.length] = data;
        //};

        //vm.getFollowerError = function (data) {
        //    $log.error("Error when getting follower", data);
        //    vm.follower[vm.follower.length] = data;
        //};

        ////Timeout in ms for the moment
        $timeout(getFollower, 1000);
        $scope.$watch(angular.bind(vm.data, function () {
            return vm.data;
        }), function (newVal) {
            $rootScope.UserProfile = newVal;
        }, true);
    }

})();
