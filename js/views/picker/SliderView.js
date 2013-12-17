define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/picker/sliderTemplate.html'
], function ($, _, Backbone, homeTemplate) {

  var SliderView = Backbone.View.extend({
    el: $("#page"),

    events: {
      "change #red-slider": "redSlider",
    },

    render: function () {
      this.$el.html(homeTemplate);
      return this;
    },

    redSlider: function(e) {
      console.log(e.target.value);
    }
  });

  return SliderView;
});