define([
  'jquery',
  'underscore',
  'backbone',
  'models/colour/ColourModel',
  'views/picker/CurrentColourView',
  'views/picker/CurrentColourTextView',
  'collections/SwatchCollection',
  'views/picker/SwatchesView'
], function ($, _, Backbone, ColourModel, CurrentColourView, CurrentColourTextView, SwatchCollection, SwatchesView) {

  var AppView = Backbone.View.extend({

    render: function () {

      var target = $("#app-view");
      var container = $("#currentColourContainer");

      var colourModel = new ColourModel();

      var swatchCollection = new SwatchCollection(); 

      var currentColourView = new CurrentColourView({
        model: colourModel,
        swatches: swatchCollection
      });
      currentColourView.render().$el.appendTo(container);

      var currentColourTextView = new CurrentColourTextView({
        model: colourModel
      });
      currentColourTextView.render().$el.appendTo(container);

      var swatchesView = new SwatchesView({
        swatches: swatchCollection
      });
      swatchesView.render().$el.appendTo(target);
    }
  });

  return AppView;

});
