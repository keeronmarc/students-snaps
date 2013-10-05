UserModel =  Backbone.Model.extend({
	initialize: function() {
	},
	defaults: {
		firstname: "",
		id: "",
		lastname: "",
		email: "",
		photo: "",
	}
})

UserCollection = Backbone.Collection.extend({
	initialize: function () {
	},
	
	model: UserModel,
	
	url: 'http://0.0.0.0:3000/collections/coolguys'
})

// instatntiation new instance of collection
// new usersok = UserCollection();
// testItems.fetch();

//5.

// UserModel =  Backbone.Model.extend({
// 	initialize: function() {
// 	}
// })

// UserCollection = Backbone.Collection.extend({
// 	initialize: function () {
// 	},
	
// 	model: UserModel,
	
// 	url: 'http://0.0.0.0:3000/collections/coolguys'
// })

// var data = []

//6
// looks at url of collection and figures out what to do with it 
// model does not need to be part of a collection
// can't search for items in server, if in the local setup there
// disparity between server and client
// backbone doesn't have a good way to fetch one thing
// fetch will bring all items, and update the local
// fetch one = alison = new Item({_id: '8089u8eu389ud'})
//but don't know the id
// backbone collections don't fetch one thing

var data = [
	{
		id: 'keeron', 
		firstName: "keeron", 
		lastName: "thandroyen", 
		email: "keeronmarc@gmail.com",
		photo: "http://1.gravatar.com/avatar/70a60deafec13f40b220ce16a07a7896?s=75&d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D75&r=G"
	}, 

	{
		id: 'keeronmarc', 
		firstName: "marc", 
		lastName: "thandsdasroyen", 
		email: "keeronmarc@gmdsail.com",
		photo: "http://1.gravatar.com/avatar/70a60deafec13f40b220ce16a07a7896?s=75&d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D75&r=G"
	}, 

]

// automatically creates model




