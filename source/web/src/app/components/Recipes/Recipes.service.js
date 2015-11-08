/**
 * Created by sylflo on 11/7/15.
 */
(function(){

    'use strict';

    angular
        .module('NourritureServices', ['ngResource'])
        .factory('RecipeService', RecipeService);

    RecipeService.$inject = [];

    function RecipeService() {

        var recipe = {

        };

        return recipe;

    }

})();
