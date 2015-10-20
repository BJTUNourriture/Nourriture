// API/models/allergies.js

var mongoose = require('mongoose');

var allergiesSchema = new mongoose.Schema({
    name : {
        type : String,
        unique : true,
        required : true
    },
    description : String,
    ingredients: {
        type: [{
            id_ingredient: {
                type: String,
                required: true
            },
            name_ingredient: {
                type: String,
                required: true
            }
        }],
        required: true
    }
});

module.exports = mongoose.model('Allergies', allergiesSchema);