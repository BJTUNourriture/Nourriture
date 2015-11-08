(function () {
    'use strict';

    angular.module('NourritureControllers')
        .controller('UserProfileController', UserProfileController);

    UserProfileController.$inject = ["$scope", "$log", "UserService"];

    function UserProfileController($sope, $log, UserService) {
        var vm = this;

        var username = "spkd";

      /*  vm.test = function () {
            //console.log("Bonjour", username);
            UserService
                .user_get
                .query({username: username})
                .$promise
                .then(vm.getUserSuccess, vm.getUserFailure);

        };*/

        vm.user =  UserService.user_get.query({username: username});
        vm.user.$promise.then(vm.getUserSuccess, vm.getUserFailure);

     /*   vm.user.$promise.then(function(data) {
            console.log(data);
        });*/


     /*   vm.user = UserService
            .user_get
            .query({username: username});

        vm.user.$promise
            .then(vm.getUserSuccess, vm.getUserFailure);*/

        vm.getUserSuccess = function (data) {
            console.log("it works", data);
            console.log(data[0])
        };

        vm.getUserFailure = function (data) {
            console.log('Failure when getting user');
        };


    }

})();


