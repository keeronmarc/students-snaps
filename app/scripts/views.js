AllStudentsView = Backbone.View.extend({

	template: _.template( $('#table-template').text() ),
	tagName: "a",

	className:'table-unit',

	initialize: function(){
		console.log('all students view created!')
		$('.container').append(this.el)
		this.render()
	},

	render: function(){
		this.$el.attr('href', '#/students/' + this.model.get('_id') ),
		this.$el.append( this.template({item: this.model }) )
	}, 

})

StudentView = Backbone.View.extend({

	template: _.template( $('#student-template').text() ),

	className:'student-unit',

	initialize: function(){
		console.log('student view created!')
		$('.container').append(this.el)
		this.render()
	},

	render: function(){
		$('.student-unit').html('')
		this.$el.append( this.template({item: this.model }) )
	},

});

EditView = Backbone.View.extend({

	newtemplate: _.template( $('#edit-template').text() ),
	
	className: 'editnow',
	
	events: {
		"click #save": "save"
	},

	initialize: function() {
		console.log('sads')
		$('.container').append(this.el)
		this.render()
	},

	render: function() {
		console.log("edit works")
		$('.student-unit').html('')
		$('.editnow').html('')
		this.$el.append( this.newtemplate({item: this.model}) )
	},

	save: function() {
		console.log("save here")
		this.model.set('first', $('#first-input').val() )
		this.model.set('last', $('#last-input').val() )
		this.model.set('email', $('#email-input').val() )
		this.model.set('github', $('#github-input').val() )
		this.model.set('photo', $('#photo-input').val() )
		this.model.save();
	}
})

AddView = Backbone.View.extend({

	template: _.template( $('#add-template').text() ),
	
	className: 'addnow',
	
	events: {
		"click #saving": "saving",
	},

	initialize: function() {
		console.log('add initialized')
		$('.container').append(this.el)
		this.render()
	},

	render: function() {
		console.log("add works")
		this.$el.append( this.template({item: this.model}) )
	},

	saving: function() {
		console.log("add here")
		this.model.set('first', $('#first-input').val())
		this.model.save()
	}
})





