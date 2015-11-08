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
                url: 'my-profile',
                parent: 'main',
                templateUrl: 'app/templates/userProfile/indexUserProfile.html'
            })
            .state('main.register', {
                url: 'register',
                parent: 'main',
                templateUrl: 'app/templates/register/register.html',
                controller: 'RegisterController',
                controllerAs: 'register'
            })
            .state('main.login', {
                url: 'login',
                parent: 'main',
                templateUrl: 'app/templates/login-logout/login.html',
                controller: 'LoginController',
                controllerAs: 'login'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
