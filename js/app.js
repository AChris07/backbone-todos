define([
  'rivets',
  'router'
], function(rivets, Router) {
  var initialize = function() {
    setAdapters();
    Router.initialize();

    Backbone.history.start();
  };

  var setAdapters = function() {
    rivets.adapters[':'] = {
      observe: function(obj, keypath, callback) {
        obj.on('change:' + keypath, callback);
      },
      unobserve: function(obj, keypath, callback) {
        obj.off('change:' + keypath, callback);
      },
      get: function(obj, keypath) {
        return obj.get(keypath);
      },
      set: function(obj, keypath, value) {
        obj.set(keypath, value);
      }
    };
  };

  return {
    initialize: initialize
  };
});
