const mongoose = require('mongoose');

const donationRequestSchema = new mongoose.Schema({
  bloodDonorId: {
    type: Number,
    required: [true, 'Donor is required.']
  }, 
  bloodDoneeId:  {
    type: Number,
    required: [true, 'Donee is required.']
  },
  reason: {
    type: String,
    required: [true, 'Reason for donation is required.']
  },
  bloodType: {
    type: Number,
    required: [true, 'Blood type is required.']
  },
  accepted:{
    type: Boolean,
    default: false
  },
  created_at: {
    type: Date,
    default:Date.now(),
    required: false
  },
  updated_at: {
    type: Date,
    default: Date.now(),
    required: false
  }
});

module.exports = mongoose.model('DonationRequest', donationRequestSchema);