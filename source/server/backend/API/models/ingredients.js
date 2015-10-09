// API/models/ingredients.js

var mongoose = require('mongoose');

var ingredientsSchema = new mongoose.Schema({
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
			unique : true,
			required : true
		},
		description : String,
		flag : {
			name : {
				type : String,
				unique : true,
				required : true
			},
			level : Number
		}
	}]
});

module.exports = mongoose.model('Ingredients', ingredientsSchema);