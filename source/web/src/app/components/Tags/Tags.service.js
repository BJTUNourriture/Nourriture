(function(){

	'use strict';

	angular
		.module('NourritureServices', ['ngResource'])
		.factory('TagsService', TagsService);

	TagsService.$inject = ["$log", "$resource", "URL_API"];

	function TagsService($log, $resource, URL_API) {

		var service = {
			tags : $resource(URL_API + '/api/tags/')
		};

		return service;

	}

})();