define([
  'rivets',
  'setup',
  'router'
], function(rivets, Setup, Router) {
  var initialize = function() {
    Setup.initialize();
    Router.initialize();

    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});
