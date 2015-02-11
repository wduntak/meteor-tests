Errors = new Mongo.Collection(null);

throwError = function(message) {
	Errors.insert({message: message})
	document.querySelector('#toast1').show()
};

Template.errors.helpers({ 
	errors: function() {
		return Errors.find(); 
	}
});

Template.error.rendered = function() {
	var error = this.data;
	Meteor.setTimeout(function() {
		Errors.remove(error._id);
	}, 3000);
};