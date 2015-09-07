define([
  'jquery',
  'underscore',
  'backbone',
  'rivets',
  'views/baseView',
  'views/NewTodoTask',
  'text!templates/list.html'
], function($, _, Backbone, rivets, BaseView, NewTodoTask, listTemplate, taskTemplate) {
  var TodoList = Backbone.View.extend({
    el: $('#todo-list'),
    template: _.template(listTemplate),
    initialize: function() {
      this.collection.on('add', this.render, this);
      this.newTask = new NewTodoTask({
        el: this.el,
        collection: this.collection
      });
    },
    render: function() {
      var html = this.template();
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
