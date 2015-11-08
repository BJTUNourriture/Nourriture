(function() {
  'use strict';

  angular
	.module('web')
	.run(runBlock);

	runBlock.$inject = ["$log", "Permission", 'UserService', '$q', '$sessionStorage', '$localStorage'];

  /** @ngInject */
  function runBlock($log, Permission, UserService, $q, $sessionStorage, $localStorage) {

	Permission.defineRole("guest", function() {
		var deferred = $q.defer();

		UserService
			.user_get_id
			.get({"id" : $sessionStorage.user_id || $localStorage.user_id})
			.$promise
			.then(profileSuccess, profileError);

		function profileSuccess() {
			$log.log("in");
			deferred.reject();
		}

		function profileError() {
			$log.log("out");
			deferred.resolve();
		}
		return (deferred.promise);
	});
}

})();
