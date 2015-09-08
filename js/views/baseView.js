define([
  'jquery',
  'underscore',
  'backbone',
  'rivets'
], function($, _, Backbone, rivets) {
  var BaseView = Backbone.View.extend({
    render: function() {
      this.binding = rivets.bind(this.$el, {
        values: this.values,
        eventList: this.eventList,
        model: this.model,
        collection: this.collection
      });
      return this;
    },
    remove: function() {
      this.binding.unbind();
    }
  });

  return BaseView;
});
