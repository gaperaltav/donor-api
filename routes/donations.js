const express = require('express');
const router = express.Router();
const DonationRequest = require('../models/donationRequest');

router.get('/:id*?', (req, res, next) => {

  const filter = req.params.id ? { _id: req.params.id } : {};

  DonationRequest
    .find(filter)
    .then(donations => res.send(donations))
    .catch(next);
});

router.post('/', (req, res, next) => {
  DonationRequest
    .create(req.body)
    .then(donations => res.send(donations))
    .catch(next);
});

router.put('/:id', function (req, res, next) {
  DonationRequest
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(donation => res.send(donation))
    .catch(next);
});

router.delete('/:id', function (req, res, next) {
  DonationRequest
    .findOneAndRemove({ _id: req.params.id })
    .then(donation => res.send(`Donation '${donation._id}' was deleted correctly.`))
    .catch(next);
});

module.exports = router;