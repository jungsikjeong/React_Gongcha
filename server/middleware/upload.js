const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');

//=================================
//             (게시글이미지업로드)
//=================================

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_PRIVATE_KEY,
});

var imageUpload = multer({
  storage: multerS3({
    s3: s3,
    acl: 'public-read',
    bucket: 'gongcha/uploadImage',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, { fileName: file.fieldname });
    },
    key: function (req, file, cb) {
      var filename = file.originalname;

      var ext = file.mimetype.split('/')[1];
      if (!['png', 'jpg', 'jpeg', 'gif', 'bmp'].includes(ext)) {
        return cb(new Error('Only images are allowed'));
      }

      cb(null, Date.now().toString() + filename);
    },
  }),
}).single('file');

var avatarUpload = multer({
  storage: multerS3({
    s3: s3,
    acl: 'public-read-write',
    bucket: 'gongcha/avatarImage',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, { fileName: file.fieldname });
    },
    key: function (req, file, cb) {
      var filename = file.originalname;
      var ext = file.mimetype.split('/')[1];
      if (!['png', 'jpg', 'jpeg', 'gif', 'bmp'].includes(ext)) {
        return cb(new Error('Only images are allowed'));
      }

      cb(null, Date.now().toString() + filename);
    },
  }),
}).single('file');

// module.exports = upload;
exports.avatarUpload = avatarUpload;
exports.imageUpload = imageUpload;
exports.s3 = s3;
