(function () {
    'use strict';

    angular
        .module('NourritureServices')
        .factory('ReceipeService', ReceipeService);

    ReceipeService.$inject = ["$log", "$resource", "URL_API"];

    /** @ngInject */
    function ReceipeService($log, $resource, URL_API) {

        var service = {
            receipes: $resource(URL_API + '/api/receipes/'),
            receipe_name : $resource(URL_API + '/api/recipes/name/:name', {name: "@name"}),
            receipe_id : $resource(URL_API + '/api/recipes/id/:id', {id: "@id"})
        };

        return service;

    }
})();
