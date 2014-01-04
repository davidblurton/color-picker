define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {

  var SwatchesView = Backbone.View.extend({

    className: "swatches",

    initialize: function (options) {
      this.swatches = options.swatches;
      this.listenTo(this.swatches, "add", this.render);
    },

    render: function () {
      console.log("added a model");

      if (this.swatches.length) {
        var model = this.swatches.at(this.swatches.length - 1);

        var redValue = model.get('red');
        var greenValue = model.get('green');
        var blueValue = model.get('blue');
        
        var colourBlock = $('<div class="mini-swatch"></div>');
        colourBlock.css('background-color', 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')');
        
        this.$el.append(colourBlock);
      }
      
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

  return SwatchesView;
});