(function() {
  'use strict';

  angular
    .module("NourritureControllers", []);

  angular
    .module("NourritureServices", ['ngResource']);

  angular
    .module('web', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ngMaterial', 'validation.match', 'ngResource', 'toastr', 'ngMdIcons', 'anim-in-out', 'NourritureControllers', 'NourritureServices']);
})();
