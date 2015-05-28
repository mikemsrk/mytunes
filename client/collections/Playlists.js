var Playlists = Backbone.Collection.extend({ // One Playlist collection.

  model: Playlist,
  initialize: function(){
    this.on('addList',this.addList,this);
  },
  addList: function(){
    // create a new playlist model.
    // then add it to this collection.
    var title = $('#plname').val();
    this.unshift(new Playlist(title));
  }

});
