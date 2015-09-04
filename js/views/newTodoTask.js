define([
  'jquery',
  'underscore',
  'backbone',
  'models/todoTask',
  'text!templates/newTask.html'
], function($, _, Backbone, TodoTask, newTaskTemplate) {
  var NewTodoTask = Backbone.View.extend({
    template: _.template(newTaskTemplate),
    render: function() {
      var html = this.template();
      this.$el.append(html);
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
