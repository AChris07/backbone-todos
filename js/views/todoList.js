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
    template: _.template(listTemplate),
    initialize: function() {
      this.newTask = new NewTodoTask({
        el: this.el,
        collection: this.collection
      });
    },
    render: function() {
      var html = this.template();
      this.$el.html(html);
      // Make sure to first bind this view, then render (and bind) subsequent ones
      BaseView.prototype.render.call(this);
      this.newTask.render();
      return this;
    },
    remove: function() {
      BaseView.prototype.remove.call(this);
    }
  });

  return TodoList;
});
