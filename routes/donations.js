const express = require('express');
const router = express.Router();
const DonationRequest = require('../models/donationRequest');

router.get('/:id*?', (req, res, next) => {

  const filter = req.params.id ? { _id: req.params.id } : {};

  DonationRequest
    .find(filter)
    .then(donations => res.json(donations))
    .catch(next);
});

router.post('/', (req, res, next) => {
  DonationRequest
    .create(req.body)
    .then(donations => res.json(donations))
    .catch(next);
});

router.put('/:id', function (req, res, next) {
  DonationRequest
    .findOneAndUpdate({ _id: req.params.id }, req.body, {new: true}, (error, result) => res.json(result))
    .catch(next);
});

router.delete('/:id', function (req, res, next) {
  DonationRequest
    .findOneAndRemove({ _id: req.params.id })
    .then(donation => res.json(`Donation '${donation._id}' was deleted correctly.`))
    .catch(next);
});

module.exports = router;