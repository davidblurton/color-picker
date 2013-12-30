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

      var redSliderView = new SliderView({
        model: colourModel,
        colour: "red"
      });
      redSliderView.render().$el.appendTo(target);

      var redTextbox = new ColourTextboxView({
        model: colourModel,
        colour: "red"
      });
      redTextbox.render().$el.appendTo(target);
      
      // green
      var greenSliderView = new SliderView({
        model: colourModel,
        colour: "green"
      });
      greenSliderView.render().$el.appendTo(target);

      var greenTextbox = new ColourTextboxView({
        model: colourModel,
        colour: "green"
      });
      greenTextbox.render().$el.appendTo(target);

      //blue
      var blueSliderView = new SliderView({
        model: colourModel,
        colour: "blue"
      });
      blueSliderView.render().$el.appendTo(target);

      var blueTextbox = new ColourTextboxView({
        model: colourModel,
        colour: "blue"
      });

      blueTextbox.render().$el.appendTo(target);

      var swatch = new SwatchView({
        model: colourModel
      });
      swatch.render().$el.appendTo(target);
    }
  });

  return AppView;

});