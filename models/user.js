const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'The name of the user is required.']   
  },
  lastName: {
    type: String,
    required: [true, 'The last name of the user is required.']   
  },
  email:  {
    type: String,
    required: [true, 'The email of the user is required.']   
  },
  password:  {
    type: String,
    required: [true, 'The pasword of the user is required.']   
  },
  bloodType: {
    type: Number,
    required: [true, 'The blood type of the user is required.']   
  },
  isActive:  {
    type: true,
    required: [true, 'The name of the user is required.']   
  },
  locationLat:  {
    type: String,
    required: false  
  },
  locationlong:  {
    type: String,
    required: false
  },
  created_at:  {
    type: Date,
    required: true,  
    default: Date.now()
  },
  updated_at:  {
    type: String,
    required: false   
  }
});

module.exports = mongoose.model('User', userSchema);