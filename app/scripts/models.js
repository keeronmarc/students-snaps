Student = Backbone.Model.extend({
  idAttribute: "_id",
  defaults:{
    first: '',
    last: '',
    email: '',
    github: '',
    photo: ''
     },

     initialize: function() {
		console.log('new model')
	}
});

AllStudents = Backbone.Collection.extend({
	initialize: function() {
		console.log('one new collection')
	},
	url: "http://0.0.0.0:3000/collections/coolguys",
  	model: Student
});


