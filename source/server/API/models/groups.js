// API/models/groups.js

var mongoose = require('mongoose');

var groupsSchema = new mongoose.Schema({
	name : { 
		type : String,
		unique : true,
		required : true
	},
	description : String,
	users_id : [{
		user_id : {
			type : String,
			required : true
		},
		access : {
			name : {
				type : String,
				required : true
			},
			level : Number
		}
	}],
	tags : [{
		name : {
			type : String,
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
	}]
});

module.exports = mongoose.model('Groups', groupsSchema);