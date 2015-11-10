(function(){

    'use strict';

    angular
        .module('NourritureServices')
        .factory('ScopesService', RecipeService);

    ScopesService.$inject = [];

    function RecipeService() {

        var scopes = {};

        var service = {
            injectScope : injectScope,
            getScope : getScope
        };

        function injectScope(scopeName, scope)
        {
            scopes[scopeName] = scope;
        }

        function getScope(scopeName)
        {
            return(scopes[scopeName]);
        }

        return service;

    }

})();
