define([
  'jquery',
  'underscore',
  'backbone',
  'views/picker/SwatchView'
], function ($, _, Backbone, SwatchView) {

  var SwatchesView = Backbone.View.extend({

    className: "swatchesContainer",

    initialize: function (options) {
      this.swatches = options.swatches;
      this.listenTo(this.swatches, "add", this.add);
      this.listenTo(this.swatches, "remove", this.remove);
    },
    
    events: {
      "click .swatch" : "remove"
    },

    render: function () {
      console.log("added a model");
      return this;
    },

    add: function (model) {
      var swatchView = new SwatchView({
        model: model
      });

      this.$el.append(swatchView.render().$el);
    },

    remove: function (e) {
      $(e.target).remove();
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