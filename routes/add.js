var data = require("../data.json");

exports.addFriend = function(request, response) {  
	// Your code goes here
	var name = request.query.name;
	var description = request.query.description;

	response.render('index', {
		'name': 'name',
		'description': 'description',
		'image': 'http://lorempixel.com/400/400/people'
	});
}