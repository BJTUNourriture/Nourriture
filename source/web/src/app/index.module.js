(function() {
  'use strict';

  angular
    .module("NourritureControllers", [])
    	.directive(ngEnter, ngEnter);

	function ngEnter() {
		return function(scope, element, attrs) {
		element.bind("keydown keypress", function(event) {
			if (event.which === 13) {
				scope.$apply(function(){
					scope.$eval(attrs.ngEnter);
				});
				event.preventDefault();
				}
			});
		};
	}

  angular
    .module("NourritureServices", []);

  angular
    .module('web', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ngMaterial', 'validation.match', 'ngResource', 'toastr', 'ngMdIcons', 'anim-in-out', 'ngStorage', 'permission', 'NourritureControllers', 'NourritureServices']);
})();
