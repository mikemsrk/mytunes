var PlaylistView = Backbone.View.extend({

  template: _.template("<form> \
                          <h3>Playlist</h3> \
                          <input type='text' id='plname'> \
                          <input type='submit'> \
                        </form> \
                        <table id='list'> \
                        </table> \
                        <button id='play'>Play</button>"),

  events: {
    'submit form' : 'addPlaylist',
    'click #play' : 'queuePlaylist'
  },

  addPlaylist: function(e){
    e.preventDefault();
    // add a playlist to the playlist
    this.$('#list').append($("<p>erher</p><button id='play'>Play</button>"));
  },

  queuePlaylist: function(e){
    e.preventDefault();
    // for each the song models
    this.collection.each(function(song){
      song.enqueue();
    });
    // trigger 'queue' event
  },

  initialize: function() {
    this.collection.on('add',this.render,this);
    this.render();
  },

  render: function(){
    this.$el.children().detach();
    this.$el.html(this.template).append(
      this.collection.map(function(song){
        return new PlaylistEntryView({model: song}).render();
      })
    );
  }

});
