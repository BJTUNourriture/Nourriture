/**
 * Created by sylflo on 11/7/15.
 */
(function(){

    'use strict';

    angular
        .module('NourritureServices', ['ngResource'])
        .factory('RecipeService', RecipeService);

    RecipeService.$inject = ["$log", "$resource", "URL_API"];

    function RecipeService($log, $resource, URL_API) {

        var recipe = {

        };

        return recipe;

    }

})();