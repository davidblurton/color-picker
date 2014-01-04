define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {

  var SwatchView = Backbone.View.extend({
    className: "swatch",

    render: function () {
      var redValue = this.model.get('red');
      var greenValue = this.model.get('green');
      var blueValue = this.model.get('blue');

      this.$el.css('background-color', 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')');
      this.$el.attr('id', this.model.cid);
      return this;
    }
  });

  return SwatchView;
});