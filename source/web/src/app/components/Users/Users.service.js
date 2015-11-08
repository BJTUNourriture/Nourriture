(function () {
    'use strict';

    angular
        .module('NourritureServices')
        .factory('UserService', UserService);

    UserService.$inject = ["$log", "$resource", "URL_API"];

    /** @ngInject */
    function UserService($log, $resource, URL_API) {

        var service = {
            user_register: $resource(URL_API + '/api/users/register/'),
            user_signin: $resource(URL_API + '/api/users/sign-in/'),
            user_get: $resource(URL_API + '/api/user/', {user: "@user"})
        };

        return service;

    }
})();
