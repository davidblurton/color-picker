// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/picker/SliderView',
  'models/colour/ColourModel'
], function ($, _, Backbone, SliderView, ColourModel) {

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
    });

    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});