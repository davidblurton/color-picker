define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {

  var SliderView = Backbone.View.extend({
    
    tagName: "input",

    className: "rgb-slider",

    attributes: {
      "min": 0,
      "max": 255,
      "type": "range"
    },

    initialize: function (options) {
      this.colour = options.colour;
      this.$el.attr("value", this.model.get(this.colour));
      console.log("Initialized Sliderview for " + this.colour);
    },

    events: {
      "change": "setValue"
    },

    setValue: function(e) {
      this.model.set(this.colour, e.target.value);
      console.log(this.model.toJSON());
    },

  });
  return SliderView;
});
