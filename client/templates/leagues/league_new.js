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
		}

		league._id = Leagues.insert(league);
		Router.go('leaguePage', league);
	}
});