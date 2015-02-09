Leagues = new Mongo.Collection('leagues');

Meteor.methods({
	leagueInsert: function(leagueAttributes) {
		check(Meteor.userId(), String);
		check(leagueAttributes, {
			name: String,
			url: String,
			address: String
		});

		var user = Meteor.user();
		var league = _.extend(leagueAttributes, {
			userId: user._id,
			author: user.username,
			created: new Date()
		});

		var leagueId = League.insert(league);

		return {
			_id: leagueId
		};
	} 
});
