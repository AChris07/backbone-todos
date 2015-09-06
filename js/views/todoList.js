define([
  'jquery',
  'underscore',
  'backbone',
  'views/NewTodoTask',
  'text!templates/list.html',
  'text!templates/task.html'
], function($, _, Backbone, NewTodoTask, listTemplate, taskTemplate) {
  var TodoList = Backbone.View.extend({
    el: $('#todo-list'),
    template: _.template(listTemplate),
    taskTemplate: _.template(taskTemplate),
    initialize: function() {
      this.collection.on('add', this.render, this);
      this.newTask = new NewTodoTask({
        el: this.el,
        collection: this.collection
      });
    },
    render: function() {
      var html = this.template({
        todoList: this.collection,
        taskTemplate: this.taskTemplate
      });
      this.$el.html(html);
      this.newTask.render();
      return this;
    }
  });

  return TodoList;
});
