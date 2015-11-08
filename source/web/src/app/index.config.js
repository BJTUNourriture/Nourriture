(function() {
  'use strict';


  angular
	.module('web')
	.factory('TopkekAuthInterceptor', TopkekAuthInterceptor);
  

  TopkekAuthInterceptor.$inject = ['$sessionStorage', '$localStorage', '$q'];

  function TopkekAuthInterceptor($sessionStorage, $localStorage, $q) {
	return {
		request: function(config) {
			config.headers = config.headers || {};
			if ($localStorage.key)
				config.headers.Authorization = 'Topkek ' + $localStorage.key;
			else if ($sessionStorage.key)
				config.headers.Authorization = 'Topkek ' + $sessionStorage.key;
			return config || $q.when(config);
		},
		response: function(response) {
			return response || $q.when(response);
		}
	};
  }

  angular
	.module('web')
	.config(config);

	config.$inject = ["$logProvider", "toastrConfig", "$locationProvider", '$httpProvider', '$sessionStorageProvider', '$localStorageProvider'];

  /** @ngInject */
  function config($logProvider, toastrConfig, $locationProvider, $httpProvider) {
	// Enable log
	$logProvider.debugEnabled(true);

	// Set options third-party lib
	toastrConfig.allowHtml = true;
	toastrConfig.timeOut = 15000;
	toastrConfig.positionClass = 'toast-top-right';
	toastrConfig.preventDuplicates = false;

	//Configuring of html5 routes
	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix('!');

	$httpProvider.interceptors.push('TopkekAuthInterceptor');
  }

})();
