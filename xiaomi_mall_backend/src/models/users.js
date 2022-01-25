const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: String,
  name: String,
  avatarUrl: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: true,
  },
  password: String,
});


module.exports = mongoose.model('User', userSchema);