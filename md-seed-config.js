const mongooseLib = require('mongoose');
const UsersSeeder = require('./seeders/users.seeder');
const dotenv = require('dotenv');

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
    UsersSeeder,
  }
};
