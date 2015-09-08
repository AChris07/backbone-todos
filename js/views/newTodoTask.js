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
    eventList: {
      addTodo: function(event, model) {
        var newTask = new TodoTask();
        var newTaskTitle = $('#new-todo-task').val();
        newTask.set('title', newTaskTitle);
        model.collection.add(newTask);
      }
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
  });

  return NewTodoTask;
});
