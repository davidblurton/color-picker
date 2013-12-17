// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/picker/SliderView',
  'models/colour/ColourModel',
  'views/picker/ColourTextboxView'
], function ($, _, Backbone, SliderView, ColourModel, ColourTextboxView) {

  var AppRouter = Backbone.Router.extend({
    routes: {
      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function () {

    var app_router = new AppRouter();

    app_router.on('route:defaultAction', function (actions) {
      var colourModel = new ColourModel();
      var redSliderView = new SliderView({
        model: colourModel,
        colour: "red"
      });
      redSliderView.render().$el.appendTo('#page');

      var blueSliderView = new SliderView({
        model: colourModel,
        colour: "blue"
      });
      blueSliderView.render().$el.appendTo('#page');

      var redTextbox = new ColourTextboxView({
        model: colourModel,
        colour: "red"
      });

      var blueTextbox = new ColourTextboxView({
        model: colourModel,
        colour: "blue"
      });

      redTextbox.render().$el.appendTo('#colourTextboxes');
      blueTextbox.render().$el.appendTo('#colourTextboxes');

    });

    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});