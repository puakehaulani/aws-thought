const { v4: uuidv4 } = require('uuid');
const params = fileName => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];

    const imageParams = {
        Bucket: 'user-images-d9c9b7b0-194e-459b-8473-78b4a84e9e29',
        Key: `${uuidv4()}.${fileType}`,
        Body: fileName.buffer,
        ACL: 'public-read' // allow read access to this file
    };

    return imageParams;
};
module.exports = params;