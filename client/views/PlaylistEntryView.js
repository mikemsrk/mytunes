var PlaylistEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template("<td><%= title %></td>"),

  initialize: function(){
  },

  events: {
    'click': function() {
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
