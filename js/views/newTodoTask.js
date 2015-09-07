define([
  'jquery',
  'underscore',
  'backbone',
  'rivets',
  'models/todoTask',
  'views/baseView',
  'text!templates/newTask.html'
], function($, _, Backbone, rivets, TodoTask, BaseView, newTaskTemplate) {
  var NewTodoTask = Backbone.View.extend({
    template: _.template(newTaskTemplate),
    render: function() {
      var html = this.template();
      this.$el.append(html);
      BaseView.prototype.render.call(this);
      return this;
    },
    remove: function() {
      BaseView.prototype.remove.call(this);
      return this;
    },
    events: {
      'click .new-todo-task__button': 'addTodo'
    },
    addTodo: function(event) {
      event.preventDefault();

      var newTask = new TodoTask();
      var newTaskTitle = $('#new-todo-task').val();
      newTask.set('title', newTaskTitle);
      this.collection.add(newTask);
    }
  });

  return NewTodoTask;
});
