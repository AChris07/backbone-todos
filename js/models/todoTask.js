define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var TodoTask = Backbone.Model = Backbone.Model.extend({
    defaults: {
      title: '',
      isDone: false
    },
    toggleStatus: function() {
      this.isDone = !this.isDone;
    }
  });

  return TodoTask;
});
