require.config({
  paths: {
    "underscore": "lib/underscore/underscore",
    "jquery": "lib/jquery/dist/jquery",
    "backbone": "lib/backbone/backbone",
    "sightglass": "lib/sightglass/index",
    "rivets": "lib/rivets/dist/rivets",
    "text": "lib/requirejs-text/text",
  },
  shim: {
    sightglass : {
      exports: 'sightglass'
    },
    rivets : {
      deps : ['sightglass'],
      exports : 'rivets'
    }
  }
});
