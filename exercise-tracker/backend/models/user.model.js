const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;

// <-- INFORMATION -->

// userChema has 1 field, username
// validations:
    // it is required, has to be unique, 
    // trims off whitespace at end, and has to be at least 3 characters long