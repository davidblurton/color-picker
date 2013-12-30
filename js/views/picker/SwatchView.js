define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {

  var SwatchView = Backbone.View.extend({
    
    className: "swatch",

    initialize: function () {
      this.listenTo(this.model, "change", this.render);
    },

    render: function () {
      var redValue = this.model.get('red');
      var greenValue = this.model.get('green');
      var blueValue = this.model.get('blue');
      this.$el.css('background-color', 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')' );
      return this;
    }
  });

  return SwatchView;
});