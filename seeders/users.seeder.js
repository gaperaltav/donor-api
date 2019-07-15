var Seeder = require('mongoose-data-seed').Seeder;
var Model = require('../src/models/user');
const ObjectId = require('mongodb').ObjectID;

var data = [
  {
    _id: new ObjectId('5d2bc042d4e3bb2ca9554daf'),
    firstName: 'Gabriel',
    lastName: 'Peralta',
    email: 'dfadf@gmail.com',
    password: '0000',
    bloodType: 'A+',
  },
  {
    _id: new ObjectId('5d2bc2680ef58a2f8a24d438'),
    firstName: 'jhon',
    lastName: 'Doe',
    email: 'jhondoe@gmail.com',
    password: '0000',
    bloodType: 'O+',
  },
  {
    _id: new ObjectId('5d2bc2eac1fd9c30f449edb6'),
    firstName: 'Sarah',
    lastName: 'Connor',
    email: 'sarahconnor@gmail.com',
    password: '0000',
    bloodType: 'AB+',
  },
  {
    _id: new ObjectId('5d2bc2eac1fd9c30f449edb7'),
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
