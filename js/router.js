define([
  'jquery',
  'underscore',
  'backbone',
  'views/app/AppView'
], function ($, _, Backbone, AppView) {

  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'index', 
    }
  });

  var initialize = function () {

    var app_router = new AppRouter();

    app_router.on('route:index', function () {

      console.log("We have loaded the home route.");

      var app = new AppView();
      app.render();

    });

    // route the initial URL
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };

});
