var leaguesData = [
	{
		name: 'Toronto Masryk Center',
		address: '300 Cowen st., Toronto, ON',
		url: 'http://masryk.com'
	},
	{
		name: 'YMCA Toronto',
		address: '500 Yonge st., Toronto, ON',
		url: 'http://ymcatoronto.com'
	},
	{
		name: 'University of Toronto',
		address: '1000 University ave., Toronto, ON',
		url: 'http://uoft.ca'
	}
];

Template.leaguesList.helpers({
	leagues: leaguesData
});