var Playlist = Songs.extend({

  initialize: function(){
    this.on('add',this.playCheck,this);
    this.on('ended',this.songEnd,this);
    this.on('dequeue',this.removeSong,this);
  },

  playCheck: function(){
    // if length of models === 1, playFirst
    if(this.models.length === 1) this.playFirst();
  },

  removeSong: function(song){
    // if song === currentSong
    if(this.at(0) === song) {
      this.at(0).ended();
    }

      // play next one

    // else just remove
    this.remove(song);
  },

  songEnd: function(){
    this.remove(this.at(0));
    if (this.models.length > 0) {
      this.playFirst();
    }
  },

  playFirst: function(){
    // debugger;
    this.at(0).play();
  }

});
