Leagues = new Mongo.Collection('leagues');

Leagues.allow({
	update: function(userId, league) { return ownsDocument(userId, league); },
	remove: function(userId, league) { return ownsDocument(userId, league); }
});

Leagues.deny({
	update: function(userId, league, fieldNames) {
		//may only edit the following three fields:
		return (_.without(fieldNames, 'url', 'name', 'address').length > 0);
	}
});

validateLeague = function(league) {
	var errors = {};

	if (!league.name)
		errors.name = "Please fill in a league name";

	if (!league.address)
		errors.address = "Please fill in an address";

	if (!league.url)
		errors.url = "Please fill in a url";

	return errors;
}

Meteor.methods({
	leagueInsert: function(leagueAttributes) {
		check(Meteor.userId(), String);
		check(leagueAttributes, {
			name: String,
			url: String,
			address: String
		});

		var errors = validateLeague(leagueAttributes);
		if (errors.name || errors.url || errors.address)
			throw new Meteor.Error('invalid-league', "You must set a name, address, or url for your post");

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
