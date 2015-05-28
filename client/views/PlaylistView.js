var PlaylistView = Backbone.View.extend({

  template: _.template("<form> \
                          <h3>Playlist</h3> \
                          <input type='text' id='plname'> \
                          <input type='submit'> \
                        </form> \
                        <table id='list'> \
                        </table>"),

  events: {
    'submit form' : 'addPlaylist',
  },

  addPlaylist: function(e){
    e.preventDefault();
    // add a playlist to the playlist
    this.collection.trigger('addList', this);
    // this.$('#list').append($("<p>erher</p>"));
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
