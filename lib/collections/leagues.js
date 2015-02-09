Leagues = new Mongo.Collection('leagues');

Meteor.methods({
	leagueInsert: function(leagueAttributes) {
		check(Meteor.userId(), String);
		check(leagueAttributes, {
			name: String,
			url: String,
			address: String
		});

		var leagueWithSameName = Leagues.findOne({name: leagueAttributes.name});
		if (leagueWithSameName) {
			return {
				leagueExists: true,
				_id: leagueWithSameName._id
			}
		}

		var user = Meteor.user();
		var league = _.extend(leagueAttributes, {
			userId: user._id,
			email: user.emails[0].address,
			created: new Date()
		});

		var leagueId = Leagues.insert(league);

		return {
			_id: leagueId
		};
	} 
});
