define([
  'jquery',
  'underscore',
  'backbone',
  'collections/todoTaskCollection',
  'views/todoList'
], function($, _, Backbone, TodoTaskCollection, TodoList) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'home'
    },
    home: function() {
      var todoTaskCollection = new TodoTaskCollection();
      var todoList = new TodoList({el: $('#todo-list'), collection: todoTaskCollection});
      todoList.render();
    }
  });

  return AppRouter;
});
