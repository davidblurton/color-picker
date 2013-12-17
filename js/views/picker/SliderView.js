define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/picker/sliderTemplate.html'
], function ($, _, Backbone, homeTemplate) {

  var SliderView = Backbone.View.extend({
    el: $("#page"),

    events: {
      "change #red-slider": "setRedValue",
    },

    render: function () {
      this.$el.html(homeTemplate);
      return this;
    },

    setRedValue: function(e) {
      this.model.set("red", e.target.value);
    }
  });

  return SliderView;
});