(function () {
    'use strict';

    angular
        .module('web')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                abstract: true,
                templateUrl : 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .state('main.homepage', {
                url: '',
                parent: 'main',
                templateUrl: 'app/templates/homepage.html'
            })
            .state('main.profile', {
                url: '/profile',
                parent: 'main',
                templateUrl: 'app/templates/userProfile/indexUserProfile.html'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
