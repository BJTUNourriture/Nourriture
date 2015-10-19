// API/models/groups.js

var mongoose = require('mongoose');

var groupsSchema = new mongoose.Schema({
	name : { 
		type : String,
		unique : true,
		required : true
	},
	description : String,
	admin_id : {
		type : String,
		required : true
	},
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