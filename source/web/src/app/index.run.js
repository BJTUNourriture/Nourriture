(function() {
  'use strict';

  angular
	.module('web')
	.run(runBlock);

	runBlock.$inject = ["$log"];

  /** @ngInject */
  function runBlock($log) {

	$log.debug('runBlock end');
  }

})();
