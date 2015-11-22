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
      is_authenticated: is_authenticated,
      update_user: $resource(URL_API + '/api/users/id/:id', {id: "@id"}, {'update': {method: 'PUT'}}),
      addGroupToUser : $resource(URL_API + '/api/users/addGroupToUser', {id: "@id"}, {'update': {method: 'PUT'}}),
      removeGroupToUser : $resource(URL_API + '/api/users/removeGroupToUser', {'update': {method: 'PUT'}})      
    };

    return service;

    function is_authenticated() {
      return ($sessionStorage.key || $localStorage.key) ? true : false;
    }


  }
})();
