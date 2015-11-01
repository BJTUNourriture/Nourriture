(function () {
    'use strict';

    angular
        .module('web')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .state('profile', {
                url: '/profile',
                templateUrl: 'app/profile/profile.html'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
