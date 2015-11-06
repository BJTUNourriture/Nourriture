(function() {
  'use strict';

  angular
    .module("NourritureControllers", []);

  angular
    .module("NourritureServices", []);

  angular
    .module('web', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ngMaterial', 'toastr', 'ngMdIcons','NourritureControllers', 'NourritureServices']);

})();
