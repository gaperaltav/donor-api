var Seeder = require('mongoose-data-seed').Seeder;
var Model = require('../src/models/user');

var data = [{
  firstName: 'Gabriel',
  lastName: 'Peralta',
  email: 'dfadf@gmail.com',
  password: '0000',
  bloodType: 'A+',
}];

var UsersSeeder = Seeder.extend({
  shouldRun: function () {
    return Model.countDocuments().exec().then(count => count === 0);
  },
  run: function () {
    return Model.create(data);
  }
});

module.exports = UsersSeeder;
