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

		Leagues.update(currentLeagueId, {$set: leagueProperties}, function(error) {
			if (error) {
				//display the error to the user and abort
				alert(error.reason);
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