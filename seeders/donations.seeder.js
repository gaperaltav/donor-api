var Seeder = require('mongoose-data-seed').Seeder;
var Model = require('../src/models/donation');
const ObjectId = require('mongodb').ObjectID;

const data = [
  {
    bloodDonorId: null,
    bloodDoneeId: new ObjectId('5d2bc2680ef58a2f8a24d438'),
    title: 'Transfusion for an operation',
    bloodType: 'A+',
    description: 'I Will be in a operation tomorrow and I need a blood transfusion ',
    accepted: true,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    bloodDonorId: null,
    bloodDoneeId: new ObjectId('5d2bc2680ef58a2f8a24d438'),
    title: 'Transfusion for an operation',
    description: 'I Will be in a operation tomorrow and I need a blood transfusion ',
    bloodType: 'O+',
    accepted: true,
    created_at: new Date(),
    updated_at: new Date(),
  }
];

const donationsSeeder = Seeder.extend({
  shouldRun: function () {
    return Model.countDocuments().exec().then(count => count === 0);
  },
  run: function () {
    return Model.create(data);
  }
});

module.exports = donationsSeeder;
