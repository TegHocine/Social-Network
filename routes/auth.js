const express = require('express');
const router = express.Router();

// @route     GET api/auth
// @desc      Get Logged in user
// @access    Private
router.get('/', (req, res) => {
  res.json({
    msg: 'Setting up Routes',
  });
});

// @route     POST api/auth
// @desc      Auth user & get token
// @access    Private
router.post('/', (req, res) => {
  res.json({
    msg: 'Setting up Routes',
  });
});

module.exports = router;
