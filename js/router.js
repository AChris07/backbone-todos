define([
  'jquery',
  'underscore',
  'backbone',
  'collections/todoTaskCollection',
  'views/todoList'
], function($, _, Backbone, TodoTaskCollection, TodoList) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'index'
    },
    index: function() {
      var todoTaskCollection = new TodoTaskCollection();
      var todoList = new TodoList({collection: todoTaskCollection});
      todoList.render();
    }
  });

  var initialize = function() {
    var appRouter = new AppRouter();
  };

  return {
    initialize: initialize
  };
});
