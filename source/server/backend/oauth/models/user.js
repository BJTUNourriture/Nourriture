var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var findOrCreate = require('mongoose-findorcreate');


var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    email : {
        type: String,
        unique: true,
        required: true
    },
    token : {
        type: String,
        unique: true
    },
    facebook         : {
        id           : String,
        token        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        displayName  : String
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