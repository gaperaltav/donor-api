var Seeder = require('mongoose-data-seed').Seeder;
var Model = require('../src/models/donation');
const ObjectId = require('mongodb').ObjectID;

const data = [
  {
    bloodDonorId: null,
    bloodDoneeId: new ObjectId('5d2bc2680ef58a2f8a24d438'),
    reason: 'I need a transfusion for an operation',
    bloodType: 'A+',
    accepted: true,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    bloodDonorId: null,
    bloodDoneeId: new ObjectId('5d2bc2680ef58a2f8a24d438'),
    reason: 'I need a transfusion for a heart operation',
    bloodType: 'O+',
    accepted: true,
    created_at: new Date(),
    updated_at: new Date(),
  }
];

var donationsSeeder = Seeder.extend({
  shouldRun: function () {
    return Model.countDocuments().exec().then(count => count === 0);
  },
  run: function () {
    return Model.create(data);
  }
});

module.exports = donationsSeeder;
