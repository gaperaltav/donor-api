const mongoose = require("mongoose");
const assert = require("assert");
const dotenv = require("dotenv");
const model = require("../../models/user");

dotenv.config();

describe("Testing user models", () => {
  before(() => {
    mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  });

  after((done) => {
    mongoose.connection.collections.users.drop(() => done());
  });

  beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => done());
  });

  it("Creating new user", (done) => {
    const user = new model({
      firstName: "test firstName",
      lastName: "test lastName",
      email: "testemail@email.com",
      password: "testpassword",
      bloodType: "A+",
      isActive: true,
    });
    user.save().then(() => {
      assert(!user.isNew); //if poke is saved to db it is not new
      done();
    });
  });
});
