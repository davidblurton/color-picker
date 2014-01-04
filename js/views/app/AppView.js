define([
  'jquery',
  'underscore',
  'backbone',
  'views/picker/SliderView',
  'models/colour/ColourModel',
  'views/picker/ColourTextboxView',
  'views/picker/SwatchView'
], function ($, _, Backbone, SliderView, ColourModel, ColourTextboxView, SwatchView) {

  var AppView = Backbone.View.extend({
    render: function () {

      var target = $("#app-view");

      var colourModel = new ColourModel();

       swatch = new SwatchView({
        model: colourModel
      });
      swatch.render().$el.appendTo(target);
    }
  });

  return AppView;

});
