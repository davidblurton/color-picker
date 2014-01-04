define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {

  var ColourTextboxView = Backbone.View.extend({

    tagName: "input",

    className: "rgb-input",

    attributes: {
      "type": "text",
      "maxlength": "3"
    },

    initialize: function (options) {
      this.colour = options.colour;
      this.listenTo(this.model, "change", this.render);
      this.render();
    },

    render: function () {
      var colorValue = this.model.get(this.colour);
      this.$el.val(colorValue);
      return this;
    }
  });

  return ColourTextboxView;
});
