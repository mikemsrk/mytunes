// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><a href="#about/<%=count%>" id="info"><button>Info</button></a></td><td>(<%= artist %>)</td><td id="songname"><%= title %></td><td><%= count %></td><td> <button id="add">Add</button></td>'),

  initialize: function(){
    this.model.on('change',this.render,this);
  },

  events: {
    'click #songname': function() {
      // this.model.play();
      this.model.enqueue();
    },
    'click #add': 'addToPlaylist'
  },

  addToPlaylist: function(){
    this.model.playlistAdd();
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
