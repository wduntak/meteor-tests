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