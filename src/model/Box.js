const mongoose = require('mongoose');

const Box = new mongoose.Schema({
	title : {
		type : String,
		required : true,
	},

	files : [{ type : mongoose.Schema.Types.ObjectId, ref: 'File' }],
},{
	timestamps : true // Adds createdAt and updatedAt to schema
});

// Exports model as a module for later use in express
module.exports = mongoose.model('Box', Box);