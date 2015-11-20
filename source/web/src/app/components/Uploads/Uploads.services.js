(function () {
    'use strict';

    angular
        .module('NourritureServices')
        .factory('UploadService', UploadService);

    UploadService.$inject = ["$log", "Upload", "URL_API"];

    /** @ngInject */
    function UploadService($log, Upload, URL_API) {

        var service = {
            recipe_thumbnail_url: recipe_thumbnail_url
        };

        return service;

        function recipe_thumbnail_url(file) {
            return (Upload.upload({
                url: URL_API + '/upload/recipes/photo/thumbnail',
                data: {recipe_thumbnail_picture: file}
            }));
        }

    }
})();
