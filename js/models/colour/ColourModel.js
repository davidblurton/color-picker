define([
  'underscore',
  'backbone'
], function(_, Backbone) {

  var ColourModel = Backbone.Model.extend({
    default: {
      red: 0
    }
  });

  return ColourModel;

});