(function () {
    'use strict';

    angular
        .module('NourritureServices')
        .factory('IngredientService', IngredientService);

    IngredientService.$inject = ["$log", "$resource", "URL_API"];

    /** @ngInject */
    function IngredientService($log, $resource, URL_API) {

        var service = {
            ingredients: $resource(URL_API + '/api/ingredients/'),
            ingredient_name : $resource(URL_API + '/api/ingredients/name/:name', {name: "@name"}),
            ingredient_id : $resource(URL_API + '/api/ingredients/id/:id', {id: "@id"})
        };

        return service;

    }
})();
