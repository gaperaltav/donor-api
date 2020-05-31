const mongoose = require("mongoose");
const assert = require("assert");
const dotenv = require("dotenv");
const model = require("../../models/user");
const config = require("../../config/mongoose");

dotenv.config();

describe("Testing User models", () => {
  before(() => {
    mongoose.connect(process.env.MONGO_URL, config);
  });

  after((done) => {
    mongoose.connection.collections.users.drop(() => done());
  });

  beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => done());
  });

  it("Creating new User", (done) => {
    const user = new model({
      firstName: "test firstName",
      lastName: "test lastName",
      email: "testemail@email.com",
      password: "testpassword",
      bloodType: "A+",
      isActive: true,
    });
    user.save().then(() => {
      assert(!user.isNew);
      done();
    });
  });
});
