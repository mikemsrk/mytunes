var PlaylistView = Backbone.View.extend({

  events: {
    'submit form' : 'addPlaylist'
  },

  addPlaylist: function(e){
    e.preventDefault();
    // add a playlist to the playlist
    this.$('#list').append($('<p>erher</p>'));

  },

  initialize: function() {

  },

  render: function(){
    this.$el.children().detach();
    this.$el.html('<h3>Queue</h3><th>Artist</th><th>Song</th>').append(
      this.collection.map(function(song){
        return new PlaylistEntryView({model: song}).render();
      })
    );
  }

});
