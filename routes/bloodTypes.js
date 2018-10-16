const express = require('express');
const router = express.Router();
const BloodType = require('../models/bloodType');

router.get('/:id*?', (req, res, next) => {

  const filter = req.params.id ? { _id: req.params.id } : {};

  BloodType
    .find(filter)
    .then(types => res.json(types))
    .then(next);
});

router.post('/', (req, res, next) => {
  BloodType
    .create(req.body)
    .then(type => res.json(type))
    .catch(next);
});

router.put('/:id', function (req, res, next) {
  const id = req.params.id;
  BloodType
    .findOneAndUpdate({ _id: id }, req.body, { new: true }, (err, type) => res.json(type))
    .catch(next);
});

router.delete('/:id', function (req, res, next) {
  var id = req.params.id;
  BloodType
    .findOneAndRemove({ _id: id })
    .then(type => res.json(`BloodType '${type.type}' was deleted correctly.`))
    .catch(next);
});

module.exports = router;