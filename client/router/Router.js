var AppRouter = Backbone.Router.extend({

  routes: {
    'about/:num': 'viewAbout',

    'songs/:title': 'songView'

  }

});

// Router
var app_router = new AppRouter();
app_router.on('route:viewAbout',function(actions){
  alert('ABout Page');
});

app_router.on('route:songView',function(title){
  console.log('bird'+ title);

});

Backbone.history.start();
