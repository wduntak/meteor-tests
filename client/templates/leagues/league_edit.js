Template.leagueEdit.created = function() {
	Session.set('leagueEditErrors', {});
}

Template.leagueEdit.helpers({
	errorMessage: function(field) {
		return Session.get('leagueEditErrors')[field];
	},
	errorClass: function (field) {
		return !!Session.get('leagueEditErrors')[field] ? 'has-error' : '';
	}
});

Template.leagueEdit.events({
	'submit form': function(e) {
		e.preventDefault();

		var currentLeagueId = this._id;
		console.log(this._id);

		var leagueProperties = {
			url: $(e.target).find('[name=url]').val(),
			address: $(e.target).find('[name=address]').val(),
			name: $(e.target).find('[name=name]').val()
		};

		var errors = validateLeague(leagueProperties);
		if (errors.name || errors.url || errors.address)
			return Session.set('leagueEditErrors', errors);

		Leagues.update(currentLeagueId, {$set: leagueProperties}, function(error) {
			if (error) {
				//display the error to the user and abort
				Errors.throw(error.reason);
			} else {
				Router.go('leaguePage', {_id: currentLeagueId});
			}
		});
	},

	'click .delete': function(e) {
		e.preventDefault();

		if (confirm("Delete this post?")) {
			var currentLeagueId = this._id;
			console.log(currentLeagueId);
			Leagues.remove(currentLeagueId);
			Router.go('leaguesList');
		}
	}
});