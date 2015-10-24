// API/models/email-token-verification.js

var mongoose = require('mongoose');

var emailTokenSchema = new mongoose.Schema({
	_userId : {
		type : mongoose.Schema.ObjectId,
		required : true,
		unique : true,
		ref : 'User'
	},
	token : {
		type : String,
		required : true
	},
	created_at : {
		type : Date,
		required : true,
		default : Date.now,
		expires : '24h'
	}
});

module.exports = mongoose.model('EmailToken', emailTokenSchema);