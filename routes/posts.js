const express = require('express')
const router = express.Router()
const Post = require('../models/post')

// @route     GET api/posts
// @desc      Get posts
// @access    Private
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({
      date: -1
    })
    res.json(posts)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route     POST api/contacts
// @desc      Add new contact
// @access    Private
router.post('/', async (req, res) => {
  const { user, name, userName, avatar, text, image } = req.body

  try {
    const newPost = new Post({
      user,
      name,
      userName,
      avatar,
      text,
      image
    })

    const post = await newPost.save()

    res.json(post)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
