define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {

  var CurrentColourView = Backbone.View.extend({

    className: "current-colour",

    initialize: function (options) {
      this.swatches = options.swatches;
      this.listenTo(this.model, "change", this.render);
    },

    events: {
      "mousemove": "updateColorOnMove",
      "mousewheel": "updateColorOnWheel",
      "click": "addColor"
    },

    render: function () {
      var redValue = this.model.get('red');
      var greenValue = this.model.get('green');
      var blueValue = this.model.get('blue');
      this.$el.css('background-color', 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')');
      return this;
    },

    updateColorOnMove: function (e) {
      this.updateColor(e.pageX, e.pageY);
    },

    updateColorOnWheel: function () {
      var scrollOffset, scaleFactor = 0;

      scrollOffset = $("#currentColourContainer").scrollTop();
      scaleFactor = scrollOffset / (this.$el.height() - $("#currentColourContainer").height()) * 255;

      if (scaleFactor >= 0 && scaleFactor <= 255) {
        this.model.set('red', Math.round(scaleFactor));
      }
    },

    updateColor: function (x, y) {
      var sl = this.$el;
      var left, top = 0;
      
      left = (x - sl.offset().left) / sl.width() * 255;
      top = (y - sl.offset().top) / sl.height() * 255;

      this.model.set('green', Math.floor(left));
      this.model.set('blue', Math.floor(top));
    },

    addColor: function() {
      var currentColour = this.model.clone();
      this.swatches.add(currentColour);
    }
  });

  return CurrentColourView;
});
