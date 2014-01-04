define([
  'jquery',
  'underscore',
  'backbone',
  'models/colour/ColourModel',
  'views/picker/SwatchView',
  'views/picker/SwatchTextboxView'
], function ($, _, Backbone, ColourModel, SwatchView, SwatchTextboxView) {

  var AppView = Backbone.View.extend({

    render: function () {

      var target = $("#app-view");

      var colourModel = new ColourModel();

      var swatchView = new SwatchView({
        model: colourModel
      });
      swatchView.render().$el.appendTo(target);

      var swatchTextboxView = new SwatchTextboxView({
        model: colourModel
      });
      swatchTextboxView.render().$el.appendTo(target);

    }
  });

  return AppView;

});