(function () {
    'use strict';

    angular
        .module('NourritureServices')
        .factory('RecipeService', RecipeService);

    RecipeService.$inject = ["$log", "$resource", "URL_API"];

    /** @ngInject */
    function RecipeService($log, $resource, URL_API) {

        var service = {
            recipes: $resource(URL_API + '/api/recipes/'),
            recipe_name : $resource(URL_API + '/api/recipes/name/:name', {name: "@name"}),
            recipe_id : $resource(URL_API + '/api/recipes/id/:id', {id: "@id"})
        };

        return service;

    }
})();
