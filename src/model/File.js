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
	timestamps : true, // Adds createdAt and updatedAt to schema
	toObject: { virtuals: true }, // Consider virtuals when casting to object
	toJSON: { virtuals: true }, // Consider virtuals when casting to JSON
});

// Here it can't be an arrow function!!
File.virtual('url').get(function(){
	console.log('teco', this.path);
	return `http://localhost:3333/files/${encodeURIComponent(this.path)}`;
});

// Exports model as a module for later use in express
module.exports = mongoose.model('File', File);