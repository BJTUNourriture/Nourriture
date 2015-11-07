(function() {
  'use strict';

  angular
    .module("NourritureControllers", []);

  angular
    .module("NourritureServices", []);

  angular
    .module('web', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ngMaterial', 'validation.match', 'toastr', 'ngMdIcons','NourritureControllers', 'NourritureServices']);

})();
