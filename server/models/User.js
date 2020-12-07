const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const UserFarmSchema = require('./UserFarmSchema');

const UserSchema = new Schema({
// farms: [UserFarmSchema],
userType: {
  type: String,
  required: true,
},
  name: {
    type: String,
    required: true,
  },
  surName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    tolowercase: true,
  },
  language: {
    type: String,
    default: 'en',
  },
  sendEmail: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  secretCode: {
    type: String
  },
  confirmed: {
    type: Boolean,
    default: false
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', UserSchema);
