(function(){

	'use strict';

	angular
		.module('NourritureServices')
		.factory('TypesService', TypesService);

	TypesService.$inject = ["$log", "$resource", "URL_API"];

	function TypesService($log, $resource, URL_API) {

		var service = {
			types : $resource(URL_API + '/api/types/')
		};

		return service;

	}

})();