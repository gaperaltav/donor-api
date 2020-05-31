const mongoose = require("mongoose");
const assert = require("assert");
const dotenv = require("dotenv");
const model = require("../../models/compatibility");
const config = require("../../config/mongoose");

dotenv.config();

describe("Testing Compatibility models", () => {
  before(() => {
    mongoose.connect(process.env.MONGO_URL, config);
  });

  after((done) => {
    mongoose.connection.collections.compatibilities.drop(() => done());
  });

  beforeEach((done) => {
    mongoose.connection.collections.compatibilities.drop(() => done());
  });

  it("Creating new Compatibility", (done) => {
    const compatibility = new model({
      bloodType: "AB+",
      donors: ["O-", "O+", "B-", "B+", "A-", "A+", "AB-", "AB+"],
    });
    compatibility.save().then(() => {
      assert(!compatibility.isNew);
      done();
    });
  });
});
