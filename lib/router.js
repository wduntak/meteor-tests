Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() { return Meteor.subscribe('leagues'); }
});


Router.route('/', {
	name: 'leaguesList'
});

Router.route('leagues/new', {
	name: 'leagueNew'
});

Router.route('/leagues/:_id', {
	name: 'leaguePage',
	data: function() { return Leagues.findOne(this.params._id);}
});

Router.route('/leagues/:_id/edit', {
	name: 'leagueEdit',
	data: function() { return Leagues.findOne(this.params._id);}
});

Router.route('/signup', {
	name: 'atSignIn'
});

var requireLogin = function() {
	if (! Meteor.user()) {
		if (Meteor.loggingIn()){
			this.render(this.loadingTemplate);
		} else {
			this.render('accessDenied');
		}
	} else {
		this.next();
	}
}

Router.onBeforeAction('dataNotFound', {only: 'leaguePage'});
Router.onBeforeAction(requireLogin, {only: 'leagueNew'});