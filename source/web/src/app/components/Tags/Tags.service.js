(function(){

	'use strict';

	angular
		.module('NourritureServices')
		.factory('TagsService', TagsService);

	TagsService.$inject = ["$log", "$resource", "URL_API"];

	function TagsService($log, $resource, URL_API) {

		var service = {
			tags : $resource(URL_API + '/api/tags/'),
			tags_name : $resource(URL_API + '/api/tags/name/:name', {name: "@name"})
		};

		return service;

	}

})();