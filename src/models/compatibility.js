const mongoose = require('mongoose');

const compatibilities = new mongoose.Schema({
  bloodType: {
    type: String,
    enum: ['A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O-', 'AB-'],
    required: [true, 'Blood type is required.']
  },
  donors: [{
    type: String,
    enum: ['A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O-', 'AB-'],
    required: [true, 'Blood type is required.']
  }],
});

module.exports = mongoose.model('Compatibility', compatibilities);