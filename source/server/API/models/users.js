var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var findOrCreate = require('mongoose-findorcreate');

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required : true,
        minlength : 3,
        maxlength : 20
    },
    password: {
        type: String,
        required : true,
        minlength : 3,
        maxlength : 30
    },
    email: {
        type: String,
        unique: true,
        required: true,
        minlength : 8,
        maxlength : 100
    },
    email_verified : {
        type : Boolean,
        default : false
    },
    gender: String,
    facebook: {
        id: String,
        token: String,
        name: String
    },
    twitter: {
        id: String,
        token: String,
        displayName: String,
        username: String
    },
    google: {
        id: {
            type: String,
            unique: true,
            sparse: true
        },
        token: String,
        displayName: String
    },
    alergy: {
			type : [{
				id_ingredient : {
					type : mongoose.Schema.ObjectId,
					required : true,
					ref : 'Allergies'
				},
				name : {
					type : String,
					required : true
				}
			}]
    },
    religion: {
			type : [{
				id_religion : {
					type : mongoose.Schema.ObjectId,
					required : true,
					ref : 'Religion'
				},
				name : {
					type : String,
					required : true
				}
			}]
    },
    pictures : [{
  		thumbnail_url : {
  			type : String,
  			required : true
  		},
  		medium_sized_url : {
  			type : String,
  			required : true
  		},
  		big_sized_url : String
  	}],
    joined_groups: {
			type : [{
				id_group : {
					type : mongoose.Schema.ObjectId,
					required : true,
					ref : 'Groups'
				},
				name : {
					type : String,
					required : true
				}
			}]
    },
    like:
        [{
            id_ingredient: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Ingredients'
            },
            name_ingredient: {
                type: String,
                required: true
            }
        }],
    dislike:
        [{
            id_ingredient: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Ingredients'
            },
            name_ingredient: {
                type: String,
                required: true
            }
        }],
    follow:
        [{
            id_person: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'User'
            },
            username: {
                type: String,
                required: true
            }
        }]
});

UserSchema.pre('save', function (callback) {
    var user = this;

    // Break out if the password hasn't changed
    if (!user.isModified('password'))
        return callback();

    // Password changed so we need to hash it
    bcrypt.genSalt(5, function (err, salt) {
        if (err) return callback(err);

        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if (err) return callback(err);
            user.password = hash;
            callback();
        });
    });
});

UserSchema.methods.verifyPassword = function (password, cb) {
    bcrypt.compare(password, this.password, function (err, isMatch) {
        if (err)
            return cb(err);
        cb(null, isMatch);
    });
};

UserSchema.plugin(findOrCreate);

// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);
