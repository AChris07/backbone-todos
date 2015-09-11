(function() {
  'use strict';

  // Configure RequireJS to shim Jasmine
  require.config({
    paths: {
      'jasmine': 'lib/jasmine/jasmine',
      'jasmine-html': 'lib/jasmine/jasmine-html',
      'boot': 'lib/jasmine/boot',
      'sinon': 'lib/sinon/index'
    },
    shim: {
      'jasmine': {
        exports: 'window.jasmineRequire'
      },
      'jasmine-html': {
        deps: ['jasmine'],
        exports: 'window.jasmineRequire'
      },
      'boot': {
        deps: ['jasmine', 'jasmine-html'],
        exports: 'window.jasmineRequire'
      },
      'sinon': {
        exports: 'sinon'
      }
    }
  });

  // Define all of your specs here. These are RequireJS modules.
  var specs = [
    'tests/models/taskSpec',
    'tests/collections/taskCollectionSpec',
    'tests/views/todoListSpec',
    'tests/routerSpec'
  ];

  // Load Jasmine and library configurations
  require(['boot', 'config', 'setup'], function (boot, config, Setup) {
    // Initialize Rivets setup
    Setup.initialize();
    // Load the specs
    require(specs, function () {
      // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
      window.onload();
    });
  });
})();
