// API/models/allergies.js

var mongoose = require('mongoose');

var allergiesSchema = new mongoose.Schema({
    name : {
        type : String,
        unique : true,
        required : true
    },
    description : String,
    ingredients : [{
        name : {
            type : String,
            unique : true,
            required : true
        },
        description : String,
        fat : {
            type : Number,
            min : 0
        },
        carbohydrates : {
            type : Number,
            min : 0
        },
        proteins : {
            type : Number,
            min : 0
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
    }]
});

module.exports = mongoose.model('Allergies', allergiesSchema);