var Playlist = Backbone.Model.extend({ // One Playlist collection.

  defaults: {
    title: 'default',
    count: 0,
    tracks: new PlaylistTracks()
  },
  initialize: function(name){
    this.set('title', name);
  },
  countUp: function(){
    this.set('count',this.get('tracks').models.length);
  }

});
