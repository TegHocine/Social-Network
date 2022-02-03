const express = require('express');
const router = require.Router();

// @route     POST api/users
// @desc      Regiter a user
// @access    Public
router.post('/', (req, res) => {
  res.json({
    msg: 'Setting up Routes',
  });
});

module.exports = router;
