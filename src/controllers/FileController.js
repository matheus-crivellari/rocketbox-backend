const File = require('../model/File'),
      Box = require('../model/Box');

// Class which will control the File model
class FileController{
	async store(req, res){
        // Gets box by its id provided in url
        const box = await Box.findById(req.params.id);

        // Creates a new file entry to be stored
        const file = await File.create({
            title : req.file.originalname,
            path : req.file.key,
        });

        // Pushes the newly file created to boxe's files (relationship)
        box.files.push(file);

        // Saves new entry to boxes
        await box.save();

        // Emits an event 'file' for every user in room box id
        req.io.sockets.in('box._id').emit('file', file);

        // Respond to client
        return res.json(file);
	}
}

// Exports an instance of FileController
module.exports = new FileController();