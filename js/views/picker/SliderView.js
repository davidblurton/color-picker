define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/picker/sliderTemplate.html'
], function ($, _, Backbone, homeTemplate) {

  var SliderView = Backbone.View.extend({
    tagName: "input",

    id: this.colour + "-slider",

    attributes: {
      "min": 0,
      "max": 255,
      "type": "range"
    },

    initialize: function (options) {
      this.colour = options.colour;
    },

    events: {
      "change": "setValue"
    },

    render: function () {
      return this;
    },

    setValue: function (e) {
      this.model.set(this.colour, e.target.value);
    }
  });

  return SliderView;
});