const File = require('../model/File');

// Class which will control the File model
class FileController{
	async store(req, res){
        console.log(req.file);

        return res.send('Ok');
	}
}

// Exports an instance of FileController
module.exports = new FileController();