Template.leagueNew.events({
	'submit form': function(e) {
		e.preventDefault();

		var league = {
			url: $(e.target).find('[name=url]').val(),
			address: $(e.target).find('[name=address]').val(),
			name: $(e.target).find('[name=name]').val()
			// url: "ryerson.ca",
			// address: "1000 Yonge st.",
			// name: "Ryerson"
		};

		Meteor.call('leagueInsert', league, function(error, result) {
			//display the error to the user and abort
			if (error)
				return throwError(error.reason);

			//show this result but route anyways
			if (result.leagueExists)
				throwError('This league name has already been created');

			Router.go('leaguePage', {_id:result._id});
		});
	}
});