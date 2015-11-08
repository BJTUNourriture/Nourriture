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
                templateUrl: 'app/templates/userProfile/indexUserProfile.html',
                controller: 'UserProfileController',
                controllerAs: 'userProfile',
                data: {
                    permissions: {
                      except: ['guest'],
                      redirectTo: 'main.homepage'
                    }
                }
            })
            .state('main.register', {
                url: 'register',
                parent: 'main',
                templateUrl: 'app/templates/register/register.html',
                controller: 'RegisterController',
                controllerAs: 'register',
                data: {
                    permissions: {
                      only: ['guest'],
                      redirectTo: 'main.homepage'
                    }
                }
            })
            .state('main.logout', {
                url: 'logout',
                parent: 'main',
                controller: 'LogoutController',
                controllerAs: 'logout',
                data: {
                    permissions: {
                      except: ['guest'],
                      redirectTo: 'main.homepage'
                    }
                }
            })
            .state('main.login', {
                url: 'login',
                parent: 'main',
                templateUrl: 'app/templates/login-logout/login.html',
                controller: 'LoginController',
                controllerAs: 'login',
                data: {
                    permissions: {
                      only: ['guest'],
                      redirectTo: 'main.homepage'
                    }
                }
            });

        $urlRouterProvider.otherwise( function($injector) {
          var $state = $injector.get("$state");
          $state.go('main.homepage');
        });
    }

})();
