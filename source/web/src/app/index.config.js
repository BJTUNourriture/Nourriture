(function() {
  'use strict';

  angular
    .module('web')
    .config(config);

    config.$inject = ["$logProvider", "toastrConfig", "$locationProvider"];

  /** @ngInject */
  function config($logProvider, toastrConfig, $locationProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    //Configuring of html5 routes
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
  }

})();
