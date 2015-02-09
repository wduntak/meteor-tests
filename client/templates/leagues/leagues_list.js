Template.leaguesList.helpers({
	leagues: function() {
		return Leagues.find({}, {sort: {created: -1}});
	}
});