define([
  'underscore',
  'backbone',
  'models/todoTask'], function(_, Backbone, TodoTask) {
  var TodoTaskCollection = Backbone.Collection.extend({
    model: TodoTask
  });

  return TodoTaskCollection;
});
