const express = require('express');
const router = express.Router();

// @route     GET api/posts
// @desc      Get all posts
// @access    Private
router.get('/', (req, res) => {
  res.json({
    msg: 'Setting up Routes',
  });
});

// @route     POST api/posts
// @desc      Add new post
// @access    Private
router.post('/', (req, res) => {
  res.json({
    msg: 'Setting up Routes',
  });
});

// @route     PUT api/posts
// @desc      Update posts
// @access    Private
router.post('/:id', (req, res) => {
  res.json({
    msg: 'Setting up Routes',
  });
});

// @route     DELETE api/posts
// @desc      DELETE posts
// @access    Private
router.post('/:id', (req, res) => {
  res.json({
    msg: 'Setting up Routes',
  });
});

module.exports = router;
