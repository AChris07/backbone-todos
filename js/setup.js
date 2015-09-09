define([
  'jquery',
  'rivets'
], function($, rivets) {
  var initialize = function() {
    setAdapters();
    setBinders();
  };

  var setAdapters = function() {
    rivets.adapters[':'] = {
      observe: function(obj, keypath, callback) {
        if(obj instanceof Backbone.Collection && keypath === 'models') {
          obj.on("add remove", function() { callback(obj.models); });
        } else {
          obj.on("change:" + keypath, callback);
        }
      },
      unobserve: function(obj, keypath, callback) {
        if(obj instanceof Backbone.Collection && keypath === 'models') {
          obj.off("add remove", function() { callback(obj.models); });
        } else {
          obj.off("change:" + keypath, callback);
        }
      },
      get: function(obj, keypath) {
        if (obj instanceof Backbone.Collection) {
          return obj.models;
        } else {
          return obj.get(keypath);
        }
      },
      set: function(obj, keypath, value) {
        if (!(obj instanceof Backbone.Collection)) {
          obj.set(keypath, value);
        }
      }
    };
  };

  var setBinders = function() {

  };

  return {
    initialize: initialize
  };
});