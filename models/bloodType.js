const mongoose = require('mongoose');

const bloodTypeSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,   
    default: Date.now(),
    required: false
  }
});


module.exports = mongoose.model('BloodType', bloodTypeSchema);