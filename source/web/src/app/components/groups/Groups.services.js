(function () {
    'use strict';

    angular
        .module('NourritureServices')
        .factory('GroupService', GroupService);

    GroupService.$inject = ["$log", "$resource", "URL_API"];

    /** @ngInject */
    function GroupService($log, $resource, URL_API) {

        var service = {
            groups: $resource(URL_API + '/api/groups/'),
            group_name : $resource(URL_API + '/api/groups/name/:name', {name: "@name"}),
            group_id : $resource(URL_API + '/api/groups/id/:id', {id: "@id"}),
            add_user : $resource(URL_API + '/api/groups/:group_id/add/:user_id', {group_id: "@group_id", user_id: "@user_id"}, {'update': {method: 'PUT'}}),
            remove_user : $resource(URL_API + '/api/groups/:group_id/remove/:user_id', {group_id: "@group_id", user_id: "@user_id"}, {'update': {method: 'PUT'}})

        };

        return service;

    }
})();
