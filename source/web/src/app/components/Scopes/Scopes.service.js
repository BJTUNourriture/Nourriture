(function(){

    'use strict';

    angular
        .module('NourritureServices')
        .factory('ScopesService', ScopesService);

    ScopesService.$inject = [];

    function ScopesService() {

        var scopes = {};

        var service = {
            injectScope : injectScope,
            updateScope : updateScope,
            getScope : getScope
        };

        function injectScope(scopeName, scope)
        {
            scopes[scopeName] = scope;
        }

        function updateScope(scopeName, value, nameKey)
        {
            angular.copy(value, scopes[scopeName][nameKey])
        }

        function getScope(scopeName)
        {
            return(scopes[scopeName]);
        }

        return service;

    }

})();
