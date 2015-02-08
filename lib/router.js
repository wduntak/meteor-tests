Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() { return Meteor.subscribe('leagues'); }
});

Router.onBeforeAction('dataNotFound', {only: 'leaguePage'});

Router.route('/', {
	name: 'leaguesList'
});

Router.route('/leagues/:_id', {
	name: 'leaguePage',
	data: function() { return Leagues.findOne(this.params._id);}
});