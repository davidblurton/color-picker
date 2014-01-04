define([
  'jquery',
  'underscore',
  'backbone',
  '../models/colour/ColourModel'
], function ($, _, Backbone, ColourModel) {

  var SwatchCollection = Backbone.Collection.extend({
    model: ColourModel
  });
  
  return SwatchCollection;
});
