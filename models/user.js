const mongoose = require('mongoose');

const UserSchem = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  userName: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  bio: {
    type: String,
    default: '',
  },
  avatar: {
    type: String,
    default: '',
  },
  cover: {
    type: String,
    default: '',
  },
});

module.exports = mongoose.model('User', UserSchem);
