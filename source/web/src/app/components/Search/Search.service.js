(function () {
    'use strict';

    angular
        .module('NourritureServices')
        .factory('SearchService', SearchService);

    SearchService.$inject = ["$log", "$resource", "URL_API"];

    /** @ngInject */
    function SearchService($log, $resource, URL_API) {

        var service = {
            ingredients: $resource(URL_API + '/api/search/ingredients/'),
            recipes : $resource(URL_API + '/api/search/recipes/'),
            groups : $resource(URL_API + '/api/search/groups/')
        };

        return service;

    }
})();
