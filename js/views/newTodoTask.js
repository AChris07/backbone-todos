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
      addTodo: function(event, view) {
        view.collection.add(view.model);
        view.model = new TodoTask();
      }
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
  });

  return NewTodoTask;
});
