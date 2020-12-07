const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const UserFarmSchema = require('./UserFarmSchema');

const ToursSchema = new Schema({
// farms: [UserFarmSchema],

  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },
  location: {
      type: String,
      required: true
  },
  likes: {
      type: Number,
      requered: true
  },
  dislikes: {
      type: Number,
      required: true
  },
  foto: {
      type: String,
      required: true
  },
  creator: {
      type: String,
      required: true
  },
  price: {
      type: Number,
      required: true
  },
  time: {
      type: Number,
      required: true
  }
});

module.exports = mongoose.model('Tour', ToursSchema);
