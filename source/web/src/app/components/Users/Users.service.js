(function() {
  'use strict';

angular
  .module('NourritureServices')
  .factory('UserService', UserService);

  UserService.$inject = ["$log", "$resource", "URL_API"];

  /** @ngInject */
  function UserService($log, $resource, URL_API) {

    var service = {
      Users : $resource(URL_API + '/api/users/register/')
    };

    return service;

  }
})();
