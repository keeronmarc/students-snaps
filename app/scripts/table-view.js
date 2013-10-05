// Define Table View Constructor
TableView = Backbone.View.extend({
  
  // Wrap the view in a tr w/ class table-view
  tagName: 'tr',
  className: 'table-view',


  // Listen for a click on the mini icon
  events: {
    'click .mini': 'details',
    'click .icon-remove': 'remove'
  },


   // Render & Append the view when it is instantiated
  initialize: function(){

    //Show Appropriate Link to alternate view
    $('.table-button').hide();
    $('.thumbnail-button').show();
    
    this.render();
    $('.table').append(this.$el)


     // If a student is added make a new view
    this.listenTo(aprClass,'add', function(student){
      new TableView({
        model: student
      });
    });

  },

 
  // When rendering, Pass in the Student Template
  render: function(){
    this.$el.html(tableTemplate(this.model.attributes));
  },


  // Clear Page and Instatiate Student view when mini icon is clicked 
  details: function() {
    $('.table').html('')
    $('.menu-view').html('')
    
    //Instatiate view with model that was clicked
    new StudentViewT({
      model: this.model
    });  
  },

  remove: function() {
    this.model.destroy();
    this.$el.html('');
  }

});