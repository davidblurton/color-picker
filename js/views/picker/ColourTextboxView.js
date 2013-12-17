define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {

  var ColourTextboxView = Backbone.View.extend({
    tagName: "input",
    id: "red-input",
    attributes: {
      "type": "text"
    },

    initialize: function () {
      console.log(this);
      this.listenTo(this.model, "change", this.render);
    },

    render: function () {
      var redValue = this.model.get("red");
      this.$el.val(redValue);
      return this;
    }
  });

  return ColourTextboxView;
});