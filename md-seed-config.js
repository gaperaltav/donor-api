const mongooseLib = require('mongoose');
const dotenv = require('dotenv');

// Importing seeders
const UsersSeeder = require('./seeders/users.seeder');
const CompatibilitiesSeeder = require('./seeders/compatibilities.seeder');

dotenv.config();

mongooseLib.Promise = global.Promise || Promise;

module.exports = {
  mongoose: mongooseLib,
  mongoURL: process.env.MONGO_URL,

  /*
    Seeders List
    ------
    order is important
  */

  seedersList: {
    CompatibilitiesSeeder,
    UsersSeeder,
  }
};
