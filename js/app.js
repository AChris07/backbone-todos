define([
  'backbone',
  'rivets',
  'setup',
  'router'
], function(Backbone, rivets, Setup, Router) {
  var initialize = function() {
    Setup.initialize();
    var router = new Router();

    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});
