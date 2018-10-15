const express = require('express');
const router = express.Router();
const BloodType = require('../models/bloodType');

router.get('/:id*?', (req, res, next) => {

  const filter = req.params.id ? { id: req.params.id } : {};

  BloodType
    .find(filter)
    .then(types => res.json(types))
    .catch(next);
});

router.post('/', (req, res, next) => {  
  BloodType
    .create(req.body)
    .then(type => res.json(type))
    .catch(next);
});

router.put('/:id', function (req, res, next) {
  const id = parseInt(req.params.id);

  BloodType
    .findOneAndUpdate({ id: id }, req.body, {new: true}, (err, type) => res.json(type))
    .catch(next);
});

router.delete('/:id', function (req, res, next) {
  var id = parseInt(req.params.id);

  BloodType
    .findOneAndRemove({ id: id })
    .then(type => res.json(`BloodType '${type.type}' was deleted correctly.`))
    .catch(next);
});

module.exports = router;