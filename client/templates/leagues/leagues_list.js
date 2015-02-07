var leaguesData = [
	{
		name: 'Toronto Masryk Center',
		address: '300 Cowen st., Toronto, ON'
	},
	{
		name: 'YMCA Toronto',
		address: '500 Yonge st., Toronto, ON'
	},
	{
		name: 'University of Toronto',
		address: '1000 University ave., Toronto, ON'
	}
];

Template.leaguesList.helpers({
	leagues: leaguesData
});