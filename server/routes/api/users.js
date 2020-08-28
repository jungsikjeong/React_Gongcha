const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route   POST api/users (회원가입)
// @desc    Register user
// @access  Public
router.post(
  '/',
  [
    check('name', '이름을 입력해주세요').not().isEmpty(),
    check('email', '유효한 email을 입력해주세요').isEmail(),
    check('password', '6 자 이상의 비밀번호를 입력하세요.').isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
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
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get(jwtSecret),
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

module.exports = router;
