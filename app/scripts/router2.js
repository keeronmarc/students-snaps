// Everything in router is set to Global

AppRouter = Backbone.Router.extend({

	mainTemplate: _.template($('#studentListTem').text()),

	initialize: function () {
		// 5) this.items = new UserCollection()
		// this.items = new UserCollection()
		// this.students = new UserCollection();
		// this.students.on('add', function (student) {
		// 	new UserView({model: student});
		// })
		// this.students.add(data);
		// stored as model in collection (object literal)
	},

	routes: {
// when index page is main route then run function
		'': 'showStudents',
		"students": "showOneStudent",
	},
	showStudents: function() {
		// 5) Easier way to do it
		// console.log("Yay new stuff")
		// 	$('.container').html('');
		// 	this.students.fetch({
		// 		success: function(students) {
		// 			students.each(function(student) {
		// 				new UserView({model: student});
		// 			})
		// 		}
		// })
	//

		// $('.container').html('');
		// $('.container').append(this.mainTemplate());
		// this.students.each(function (student) {
		// 	new UserView({model: student});
		// })
		// 
	
	// 4	
	// this.items.listenTo(this.items, 'add', function(item) {
	// 	new UserView({model: student});
	// })

		$('.container').html();

// 7. if this.items(get('id') = exists ) then get 

		// this.items = new UserCollection()
		// this.items =  new UserCollection()
		
		//4
		// var that = this
		// $.get('http://0.0.0.0:3000/collections/coolguys', function(data) {
		// 	console.log("awesome data")
		// 	that.items.add(data) // that refers to AppRouter
		// })

		// this.items.each(function(student) {
		// 	new UserView({model:student})
		// })

		// 4) We need to provide url for our collection

		// 3) We can teach the collection to fetch, render and then come back
		// persisting the data 

		// 1) Promises - then, done - user settings for saving Ajax calls
		// We need a callback function, happen everytime we navigate back/forth
		// if We add new item to UserCollection
		// this.items = new UserCollection()
		// $.get('http://0.0.0.0:3000/collections/coolguys').then(function(data) {
		// 	console.log("awesome data")
		// 	that.items(data)
		// })
	},
	showOneStudent: function() {
		$('.container').html('');
		console.log("yaysda")
	},
});

var router = new AppRouter();
Backbone.history.start()
// makes backbone look at url and load route that it needs to
// initialize runs then


// when you store a reference to that object, you don't copy an object in js
// get method, will update the return object, b/c placed in a variable and referenced to a 
// a variable



