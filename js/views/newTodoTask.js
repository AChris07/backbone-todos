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
    values: {
      taskPlaceholder: 'Your new task',
      addTaskText: 'Add task'
    },
    events: {
      'click .new-todo-task__button': 'addTodo'
    },
    initialize: function() {
      this.model = new TodoTask();
    },
    render: function() {
      var html = this.template();
      this.$el.append(html);
      BaseView.prototype.render.call(this);
      return this;
    },
    remove: function() {
      BaseView.prototype.remove.call(this);
    },
    addTodo: function(event) {
      var newTask = this.model.clone();
      this.collection.add(newTask);
      this.model.unset('title');
    }
  });

  return NewTodoTask;
});
