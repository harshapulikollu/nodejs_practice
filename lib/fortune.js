var fortuneCookies = ["COnques ur fears or they will conquer u",
				"rivers need springs.",
				"dont fear wgar u dont know",
				"u will have a pleasent surprsie",
				"whenevr possible, keep it simple"
];

exports.getFortune = function(){
	var idx = Math.floor(Math.random()* fortuneCookies.length); // generating random num for fortunes array.
	return fortuneCookies[idx];
};	