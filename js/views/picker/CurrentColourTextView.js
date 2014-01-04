define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {

  var CurrentColourTextView = Backbone.View.extend({

    className: "swatch-text",

    initialize: function () {
      this.listenTo(this.model, "change", this.render);
    },

    render: function () {
      var redValue = this.model.get('red');
      var greenValue = this.model.get('green');
      var blueValue = this.model.get('blue');
      
      this.$el.text(this.toHexString(redValue, greenValue, blueValue));
      return this;
    },

    toHexString: function (red, green, blue) {

      return "#" + convertToHex(red) + convertToHex(green) + convertToHex(blue);

      function convertToHex(value) {
        var hexValue = value.toString(16);
        if (hexValue.length < 2) {
          return "0" + hexValue;
        }
        return hexValue;
      }
    }
  });
  
  return CurrentColourTextView;
});