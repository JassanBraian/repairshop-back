const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: {
      type: String,
      unique: true,
      minlength: 2,
      maxlength: 45,
      required: [true, 'Please input the username']
  },
  password:{
    type: String,
    minlength: 8,
    maxlength: 45,
    required: [true, 'Please input de password'],
  }
});

const User = model('User', userSchema);

module.exports = User;
