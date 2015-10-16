// API/models/recipes.js

var mongoose = require('mongoose');

var recipesSchema = new mongoose.Schema({
	title : {
		type : String,
		required : true
	},
	author_id : {
		type : String,
		required : true
	},
	author_name : {
		type : String,
		required : true
	},
	description : String,
	type : String,
	date_posted : {
		type : Date,
		default : Date.now
	},
	date_edited : Date,
	difficulty : {
		type: Number,
		min: 0,
		max: 3,
		default : 0
	},
	average_score : {
		type : Number,
		min : 0,
		max : 5,
		default : 0
	},
	time_preparation : {
		type : Number,
		min : 0,
		max : 90000,
		default : 0
	},
	average_price : {
		type : Number,
		min : 0,
		max : 3,
		default : 0
	},
	comments : [{
		id_author : {
			type : String,
			required : true
		},
		name_author : {
			type : String,
			required : true
		},
		date_posted : {
			type : Date,
			required : true
		},
		date_edited : Date,
		content : {
			type : String,
			required : true
		},
		visible : {
			type : Boolean,
			default : true
		}
	}],
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
	ingredients : {
		type : [{
			id_ingredient : {
				type : String,
				required : true
			},
			name_ingredient : {
				type : String,
				required : true
			},
			amount_ingredient : {
				type : Number,
				min : 0,
				max : 1000000,
				default : 0
			}
		}],
		required : true
	}
});

module.exports = mongoose.model('Recipes', recipesSchema);