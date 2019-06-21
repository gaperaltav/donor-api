var Seeder = require('mongoose-data-seed').Seeder;
var Model = require('../src/models/compatibility');

var data = [
  {
    bloodType: 'O-',
    donors: [
      'O-'
    ],
  },
  {
    bloodType: 'O+',
    donors: [
      'O+',
      'O-'
    ],
  },
  {
    bloodType: 'B-',
    donors: [
      'B-',
      'O-'
    ],
  },
  {
    bloodType: 'B+',
    donors: [
      'O-',
      'O+',
      'B+',
      'B-',
    ],
  },
  {
    bloodType: 'A-',
    donors: [
      'O-',
      'A-',
    ],
  },
  {
    bloodType: 'A+',
    donors: [
      'O-',
      'O+',
      'A+',
      'A-',
    ],
  },
  {
    bloodType: 'AB-',
    donors: [
      'O-',
      'B-',
      'A-',
      'AB-',
    ],
  },
  {
    bloodType: 'AB+',
    donors: [
      'O-',
      'O+',
      'B-',
      'B+',
      'A-',
      'A+',
      'AB-',
      'AB+',
    ],
  },
];

var CompatibilitiesSeeder = Seeder.extend({
  shouldRun: function () {
    return Model.countDocuments().exec().then(count => count === 0);
  },
  run: function () {
    return Model.create(data);
  }
});

module.exports = CompatibilitiesSeeder;
