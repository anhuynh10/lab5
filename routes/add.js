var data = require("../data.json");

exports.addFriend = function(request, response) {  
	// Your code goes here
	var name = request.query.name;
	var description = request.query.description;
	var image = request.query.image;
	console.log(name + description);

	response.render('index', {
		'name:': 'name',
		'description:': 'description',
		'imageURL': 'http://lorempixel.com/400/400/people'
	});
}

function addFriend(name, description) {
	return 
}