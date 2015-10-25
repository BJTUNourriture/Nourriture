// API/models/email-token-verification.js

var mongoose = require('mongoose');
var uuid = require('node-uuid');

var emailTokenSchema = new mongoose.Schema({
	user_id : {
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

emailTokenSchema.methods.createVerificationToken = function (next) {
    var verificationToken = this;
    var token = uuid.v4();
    verificationToken.set('token', token);
    verificationToken.save(function (err) {
        if (err) 
        	return next(err);
        return next(null, token);
        console.log("Verification token", verificationToken);
    });
};

module.exports = mongoose.model('EmailToken', emailTokenSchema);