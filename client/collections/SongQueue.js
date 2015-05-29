// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

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
     this.songEnd();
    }
    // play next one
    // else just remove
    this.remove(song);
  },

  songEnd: function(){
    this.shift();
    if (this.length > 0) {
      this.playFirst();
    }else{
      this.trigger('stop');
    }
  },

  playFirst: function(){
    this.at(0).play();
  }

});
