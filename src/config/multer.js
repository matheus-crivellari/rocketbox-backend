const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
    // A smarter way to configure relative path for folders
    dest : path.resolve(__dirname, '..', '..', 'tmp'),
    storage : multer.diskStorage({
        destination : (req, file, cbck) => {
            // Firts argument: error, second: path
            cbck(null, path.resolve(__dirname, '..', '..', 'tmp'));
        },

        filename : (req, file, cbck) => {
            // Generate 18n bytes of random characters
            crypto.randomBytes(16, (error, hash) => {
                if(err) cbck(err);

                // Generate new filename for avoiding overriding files
                file.key = `${hash.toString('hex')}-${file.originalname}`;
                cbck(null, file.key);
            });
        },
    })
}