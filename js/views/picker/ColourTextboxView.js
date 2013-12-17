define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {

  var ColourTextboxView = Backbone.View.extend({
    tagName: "input",

    id: function(){
      return this.colour + '-input';
    },

    attributes: {
      "type": "text"
    },

    initialize: function (options) {
      this.colour = options.colour;
      this.listenTo(this.model, "change", this.render);
    },

    render: function () {
      var redValue = this.model.get(this.colour);
      this.$el.val(redValue);
      return this;
    }
  });

  return ColourTextboxView;
});