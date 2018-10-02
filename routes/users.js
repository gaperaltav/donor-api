const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/:id*?', (req, res, next) => {

  const filter = req.params.id ? { _id: req.params.id } : {};

  User
    .find(filter)
    .then(users => res.send(users))
    .catch(next);
});

router.post('/', (req, res, next) => {
  User
    .create(req.body)
    .then(user => res.send(user))
    .catch(next);
});

router.put('/:id', function (req, res, next) {
  User
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(user => res.send(user))
    .catch(next);
});

router.delete('/:id', function (req, res, next) {
  User
    .findOneAndRemove({ _id: req.params.id })
    .then(user => res.send(`User '${user.firstName}' was deleted correctly.`))
    .catch(next);
});

module.exports = router;