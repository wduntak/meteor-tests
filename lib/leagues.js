Leagues = new Mongo.Collection('leagues');

Leagues.allow({
	insert: function(userId, doc) {
		//only allow posting if you are logged in
		return !! userId;
	}
});