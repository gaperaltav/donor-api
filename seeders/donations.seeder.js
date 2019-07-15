var Seeder = require('mongoose-data-seed').Seeder;
var Model = require('../src/models/donation');
const ObjectId = require('mongodb').ObjectID;

const data = [
    {
        bloodDonorId: new ObjectId('5d2bc042d4e3bb2ca9554daf'),
        bloodDoneeId: new ObjectId('5d2bc2680ef58a2f8a24d438'),
        reason: 'blood transfusion caused by my disease',
        bloodType: 'A+',
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
  