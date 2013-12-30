// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/app/AppView'
], function ($, _, Backbone, AppView) {

  var AppRouter = Backbone.Router.extend({
    routes: {
      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function () {

    var app_router = new AppRouter();

    app_router.on('route:defaultAction', function (actions) {
      var app = new AppView();
      app.render();
    });

    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});