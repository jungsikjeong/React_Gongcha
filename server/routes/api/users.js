const express = require('express');
const router = express.Router();
const multer = require('multer');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');
const auth = require('../../middleware/auth');

//=================================
//             (이미지업로드)
//=================================

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

var upload = multer({ storage: storage }).single('file');

// @route   POST api/users (회원가입)
// @desc    Register user
// @access  Public
router.post(
  '/',
  [
    check('name', '이름을 입력해주세요😥').not().isEmpty(),
    check('email', '유효한 이메일을 입력해주세요😥').isEmail(),
    check('password', '6자 이상의 비밀번호를 입력해주세요😥').isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // 사용자가 있는지 확인
      let user = await User.findOne({ email });

      if (user) {
        res
          .status(400)
          .json({ errors: [{ msg: '사용자가 이미 존재합니다.' }] });
      }
      // 사용자 Gravatar 가져 오기
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm',
      });

      user = new User({
        name,
        email,
        avatar,
        password,
      });

      // 비밀번호 암호화
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // Return jsonwebtoken
      // 원래는 로그인에쓰이지만, 회원가입하자마자 바로 로그인 할 수 있게하려고 회원가입에쓰임
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   POST api/users/edit/avatar (프로필 이미지 편집)
// @desc    AvatarChange user
// @access  Private
router.post('/edit/avatar', async (req, res) => {
  // 프론트 에서 가져온 이미지를 저장을 해준다.
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    if (!req.file) return res.send('Please upload a file');

    return res.json({
      success: true,
      filePath: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});

// @route   POST api/users/edit/ (유저 정보 변경)
// @desc    User information change
// @access  Private
router.post('/edit/profile', auth, async (req, res) => {
  console.log(req.body);

  try {
    let user = await User.findOne({ _id: req.user.id });

    if (user) {
      // Update
      console.log('user있음');
      await User.findByIdAndUpdate(user, {
        // name,
        avatar: req.body.avatar,
      });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
