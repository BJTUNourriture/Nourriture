(function() {
  'use strict';

angular
  .module('NourritureServices')
  .factory('UserService', UserService);

  UserService.$inject = ["$log", "$http"];

  /** @ngInject */
  function UserService($log, $http) {

    var service = {
    };

    return service;

  }
})();
