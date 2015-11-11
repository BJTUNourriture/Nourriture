(function () {
    'use strict';

    angular
        .module('NourritureServices')
        .factory('IngredientService', IngredientService);

    IngredientService.$inject = ["$log", "$resource", "URL_API"];

    /** @ngInject */
    function IngredientService($log, $resource, URL_API) {

        var service = {
            ingredients: $resource(URL_API + '/api/ingredients/')
        };

        return service;

    }
})();
