define(['router'], function(Router) {
  var initialize = function() {
    Router.initialize();
    
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});
