define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var TodoTask = Backbone.Model = Backbone.Model.extend({
    defaults: {
      title: '',
      completed: false
    },
    toggleStatus: function() {
      this.completed = !this.completed;
    }
  });

  return TodoTask;
});
