const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

router.get('/', (req, res) => {
  return res.json('안녕하세요 auth입니다.');
});

module.exports = router;
