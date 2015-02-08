Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() { return Meteor.subscribe('leagues'); }
});

Router.route('/', {
	name: 'leaguesList'
});

Router.route('/leagues/:_id', {
	name: 'leaguePage',
	data: function() { return Leagues.findOne(this.params._id);}
});