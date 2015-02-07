Leagues = new Mongo.Collection('leagues');

if (Leagues.find().count() === 0) {
	Leagues.insert({
		name: "YMCA Toronto",
		address: "500 Yonge st., Toronto, ON",
		url: "http://ymca.toronto.com"
	});

	Leagues.insert({
		name: "Masryk Community Center",
		address: "300 Cowan st., Toronto, ON",
		url: "http://masrykcommunity.com"
	});

	Leagues.insert({
		name: "University of Toronto",
		address: "1000 University ave., Toronto, ON",
		url: "http://uoft.ca"
	});
}