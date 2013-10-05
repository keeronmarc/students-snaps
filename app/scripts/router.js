AppRouter = Backbone.Router.extend({

	initialize: function() {
		this.students = new AllStudents()
	},

	routes: {
		""					 	: "showAll",
		"students/add"			: "showAdd",
		"students/:id"	 		: "showStudent",
		"students/:id/edit"		: "showEdit",
	},

	showAll: function(){
		console.log("view all students")
		$('.container').html('')
		this.students.fetch({
			success: function(collection) {
				collection.each(function(student){
					new AllStudentsView({model: student})
				});
			}	
		})  
	},

	showAdd: function(){
		console.log("add another")
		this.listenTo(this.model, 'change', function() {
			new AddView()
		});
		
	},

	showStudent: function(id) {
		console.log('student id: ', id)
		$('.container').html('')
		this.students.fetch({
			success: function(collection) {
				var showStudent = collection.get(id)
					new StudentView({model: showStudent})
			}	
		}) 
	// setting model to find by id, place into shownStudent and display
	},

	showEdit: function(id) {
		console.log('editing student')
		$('.container').html('')
		
		if(this.students.length === 0) {
			this.students.fetch({
				success: function(collection) {
					var studentToShow = collection.get(id);
						new EditView({model: studentToShow});
				}	
			})
		} else  {
				var studentToShow = this.students.get(id);
					new EditView({model: studentToShow});
		}

	}	
})

var router = new AppRouter()
Backbone.history.start()