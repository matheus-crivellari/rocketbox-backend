const mongoose = require('mongoose');

const Box = new mongoose.Schema({
	title : {
		type : String,
		required : true,		
	},

	files : [],
},{
	timestamps : true // Adds createdat and updatedat to schema
});

// Exports model as a module for later use in express
module.exports = mongoose.model('Box', Box);