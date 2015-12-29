(function () {
  'use strict';

  angular
    .module("NourritureControllers", []);

  angular
    .module("NourritureServices", []);

  angular
    .module('web',
    [
      'ngAnimate',
      'ngCookies',
      'ngTouch',
      'ngSanitize',
      'ngMessages',
      'ngAria',
      'ngResource',
      'ui.router',
      'ngMaterial',
      'md.data.table',
      'validation.match',
      'ngResource',
      'toastr',
      'ngMdIcons',
      'anim-in-out',
      'ngStorage',
      'permission',
      'ngFileUpload',
      'textAngular',
      'NourritureControllers',
      'NourritureServices',
      'NourritureHostname'
    ]);
})();
