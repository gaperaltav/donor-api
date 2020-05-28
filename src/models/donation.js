const mongoose = require("mongoose");
var ObjectId = mongoose.Schema.Types.ObjectId;

const donations = new mongoose.Schema({
  bloodDonorId: {
    type: ObjectId,
    required: false,
  },
  bloodDoneeId: {
    type: ObjectId,
    required: [true, "Donee is required."],
  },
  title: {
    type: String,
    required: [true, "Reason for donation is required."],
  },
  description: {
    type: String,
    required: [true, "Description for donation is required."],
  },
  bloodType: {
    type: String,
    enum: ["A+", "B+", "O+", "AB+", "A-", "B-", "O-", "AB-"],
    required: [true, "Blood type is required."],
  },
  accepted: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now(),
    required: false,
  },
  updated_at: {
    type: Date,
    default: Date.now(),
    required: false,
  },
});

module.exports = mongoose.model("Donation", donations);
