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
    required: true,
    default: Date.now()
  }
});


module.exports = mongoose.model('BloodType', bloodTypeSchema);