// API/models/types.js

var mongoose = require('mongoose');

var typesSchema = new mongoose.Schema({
	name : {
		type : String,
		required : true,
		unique : true,
	},
	category : {
		type : String
	}
});

module.exports = mongoose.model('Types', typesSchema);