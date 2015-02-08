Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() { return Meteor.subscribe('leagues'); }
});

Router.route('/', {
	name: 'leaguesList'
});