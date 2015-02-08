Meteor.publish('leagues', function() {
	return Leagues.find();
});

Meteor.publish('allLeagues', function(){
	return Leagues.find();
});