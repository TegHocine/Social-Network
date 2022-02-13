const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    require: true
  },
  userName: {
    type: String,
    require: true
  },
  avatar: {
    type: String,
    require: true
  },
  text: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: ''
  },
  date: {
    type: Date,
    default: Date.now
  },
  verified: {
    type: String,
    default: false
  },
  likes: {
    type: Array,
    default: []
  },
  comments: {
    type: Array,
    default: []
  }
})

module.exports = mongoose.model('post', PostSchema)
