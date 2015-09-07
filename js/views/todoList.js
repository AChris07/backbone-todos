define([
  'jquery',
  'underscore',
  'backbone',
  'rivets',
  'views/baseView',
  'views/NewTodoTask',
  'text!templates/list.html',
  'text!templates/task.html'
], function($, _, Backbone, rivets, BaseView, NewTodoTask, listTemplate, taskTemplate) {
  var TodoList = BaseView.extend({
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
      BaseView.prototype.render.call(this);
      return this;
    },
    remove: function() {
      BaseView.prototype.remove.call(this);
    }
  });

  return TodoList;
});
