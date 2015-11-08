(function () {
    'use strict';

    angular
        .module('NourritureServices')
        .factory('UserService', UserService);

    UserService.$inject = ["$log", "$resource", "URL_API", "$sessionStorage", "$localStorage"];

    /** @ngInject */
    function UserService($log, $resource, URL_API, $sessionStorage, $localStorage) {

        var service = {
            user_register: $resource(URL_API + '/api/users/register/'),
            user_signin: $resource(URL_API + '/api/users/sign-in/'),
            user_get_username: $resource(URL_API + '/api/users/username/:username', {username: "@username"}),
            user_get_id: $resource(URL_API + '/api/users/id/:id', {id: "@id"}),
            is_authenticated : is_authenticated
        };

        return service;

        function is_authenticated () {
          return ($sessionStorage.key || $localStorage.key) ? true : false;
        };

    }
})();
