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
      var redModel = new ColourModel();
      var sliderView = new SliderView({
        model: redModel
      });
      sliderView.render();

      var colourTextbox = new ColourTextboxView({
        model: redModel
      });

      colourTextbox.render().$el.appendTo('#colourTextboxes');
    });

    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});