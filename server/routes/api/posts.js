const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Post = require('../../models/Post');
const User = require('../../models/User');

// @route   POST api/posts
// @desc    게시물 작성
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('text', '내용을 양식에 맞게 입력해주세요!')
        .not()
        .isEmpty()
        .isLength({
          min: 25,
        }),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');

      const newPost = new Post({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      });

      const post = await newPost.save();

      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   GET api/posts
// @desc    모든 게시물 가져 오기
// @access  Public
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({
      date: -1,
    });

    res.json(posts);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

// @route   GET api/posts/:id
// @desc    ID로 게시물 받기(특정 게시글 받기)
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: '게시글을 찾을 수 없습니다' });
    }

    res.json(post);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: '게시글을 찾을 수 없습니다' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/posts/:id
// @desc    게시글 지우기
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: '게시글이 없습니다.' });
    }

    // check user
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: '게시글을 작성한 유저가 아닙니다.' });
    }

    await post.remove();

    res.json({ msg: '게시글 삭제 완료' });
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: '게시글을 찾을 수 없습니다.' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/posts/like/:id
// @desc    게시글 좋아요 누르기
// @access  Private
router.put('/like/:id', auth, async (req, res) => {
  try {
    const post = Post.findById(req.params.id);

    // 게시글이 이미 좋아요 눌렀는지 확인
    if (
      post.likes.filter((like) => like.user.toString() === req.user.id).length >
      0
    ) {
      return res.status(400).json({ msg: '이미 좋아요를 누른 게시글 입니다.' });
    }

    post.likes.unshift({ user: req.user.id });

    await post.save();

    res.json(post.likes);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: '게시글을 찾을 수 없습니다.' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/posts/like/:id
// @desc    게시글 좋아요 취소하기
// @access  Private
router.put('/unlike/:id', auth, async (req, res) => {
  try {
    const post = Post.findById(req.params.id);

    if (
      post.likes.filter((like) => like.user.toString() === req.user.id).length >
      0
    ) {
      return res.status(400).json({ mag: '먼저 게시글에 좋아요를 눌러주세요' });
    }

    // Get remove index
    const removeIndex = post.likes
      .map((like) => like.user.toString())
      .indexOf(req.user.id);

    post.likes.splice(removeIndex, 1);

    await post.save();

    res.json(post.likes);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: '게시글을 찾을 수 없습니다.' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   POST api/posts/comment/:id
// @desc    게시글에 댓글 작성
// @access  Private
router.post(
  '/comment/:id',
  [auth, [check('text', '댓글을 입력해주세요').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select('-password');
      const post = await Post.findById(req.params.id);

      const newComment = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      };

      post.comments.unshift(newComment);

      await post.save();

      res.json(post.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   DELETE api/posts/comment/:id/:comment_id
// @desc    댓글 삭제
// @access  Private
router.delete('/comment/:id/:comment_id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // 댓글꺼내기
    // :id와 일치하는 댓글 찾기
    const comment = post.comments.find(
      (comment) => comment.id === req.params.comment_id
    );

    // 댓글 유무
    if (comment) {
      return res.status(404).json({ msg: '댓글이 없습니다.' });
    }

    // check user
    if (comment.user.toString() !== req.params.id) {
      return res.status(404).json({ msg: '댓글 작성자가 아닙니다.' });
    }

    // Get remove index
    const removeIndex = post.comments
      .map((comment) => comment.user.toString())
      .indexOf(req.user.id);

    post.comments.splice(removeIndex, 1);

    await post.save();

    res.json(post.comment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
