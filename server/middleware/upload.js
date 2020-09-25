const multer = require('multer');
//=================================
//             (게시글이미지업로드)
//=================================
var multerImage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/images');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
//=================================
//             (프로필이미지업로드)
//=================================
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/avatar');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

var imageUpload = multer({ storage: multerImage }).single('file');

var avatarUpload = multer({ storage: storage }).single('file');

// module.exports = upload;
exports.avatarUpload = avatarUpload;
exports.imageUpload = imageUpload;
