var mongoose = require('mongoose');

var tagsSchema = new mongoose.Schema({
	name : {
			type : String,
			unique : true,
			required : true
		},
		description : String,
		flag : {
			name : {
				type : String,
				required : true
			},
			level : Number
		}
	});

module.exports = mongoose.model('Tags', tagsSchema);