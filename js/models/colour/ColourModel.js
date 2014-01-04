define([
  'underscore',
  'backbone'
], function (_, Backbone) {

  var ColourModel = Backbone.Model.extend({
    defaults: {
      red: 255,
      green: 255,
      blue: 255
    },
    
    initialize: function () {
      console.log("Initialized ColorModel");
    }
  });

  return ColourModel;
});