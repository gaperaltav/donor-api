const express = require('express');
const router = express.Router();

const donations = [
  { title: 'I Need blood', reason: 'I have cancer', bloodType: 'A+' },
  { title: 'I Need blood', reason: 'My mon is sick', bloodType: 'B+' },
  { title: 'I Need blood', reason: 'I\'m sick', bloodType: 'A-' },
  { title: 'I Need blood', reason: 'I need more blood', bloodType: 'O+' },
  { title: 'I Need blood', reason: 'I aunt is sick', bloodType: 'AB+' }
];

router.get('/', (req, res) => {
  res.send(donations)
})


module.exports = router