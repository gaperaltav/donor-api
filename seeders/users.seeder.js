var Seeder = require('mongoose-data-seed').Seeder;
var Model = require('../src/models/user');

var data = [
  {
    firstName: 'Gabriel',
    lastName: 'Peralta',
    email: 'dfadf@gmail.com',
    password: '0000',
    bloodType: 'A+',
  },
  {
    firstName: 'jhon',
    lastName: 'Doe',
    email: 'jhondoe@gmail.com',
    password: '0000',
    bloodType: 'O+',
  },
  {
    firstName: 'Sarah',
    lastName: 'Connor',
    email: 'sarahconnor@gmail.com',
    password: '0000',
    bloodType: 'AB+',
  },
  {
    firstName: 'Jhon',
    lastName: 'Connor',
    email: 'jhonconnor@gmail.com',
    password: '0000',
    bloodType: 'B-',
  }
];

var UsersSeeder = Seeder.extend({
  shouldRun: function () {
    return Model.countDocuments().exec().then(count => count === 0);
  },
  run: function () {
    return Model.create(data);
  }
});

module.exports = UsersSeeder;
