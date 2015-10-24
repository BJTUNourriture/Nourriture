var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var findOrCreate = require('mongoose-findorcreate');

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true
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
        type: Array,
    },
    religion: {
        type: String,
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
        type: Array,
    },
    like: {
        type: [{
            id_ingredient: {
                type: String
            },
            name_ingredient: {
                type: String
            }
        }]
    },
    dislike: {
        type: [{
            id_ingredient: {
                type: String
            },
            name_ingredient: {
                type: String
            }
        }]
    },
    follow: {
        type: [{
            id_person: {
                type: String
            },
            username: {
                type: String
            }
        }]
    }
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
