var PlaylistEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template("<td><%= title %></td><td><%= count %></td><td><button id='play'>Play</button></td>"),

  initialize: function(){
    this.model.on('banana',this.addTrack,this);
  },

  addTrack: function(){
    this.model.countUp();
    this.render();
  },

  events: {
    'click button': function() {
      this.model.get('tracks').each(function(song){
        song.enqueue();
      });
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
