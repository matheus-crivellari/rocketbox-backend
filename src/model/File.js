const mongoose = require('mongoose');

const File = new mongoose.Schema({
	title : {
		type : String,
		required : true,		
	},
	path : {
		type : String,
		required : true,
	},
},{
	timestamps : true // Adds createdat and updatedat to schema
});

// Exports model as a module for later use in express
module.exports = mongoose.model('File', File);