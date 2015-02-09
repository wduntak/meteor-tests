Template.leaguePage.helpers({
	ownLeague: function() {
		return this.userId === Meteor.userId();
	}
});