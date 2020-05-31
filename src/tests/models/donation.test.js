const mongoose = require("mongoose");
const assert = require("assert");
const dotenv = require("dotenv");
const model = require("../../models/donation");
const config = require("../../config/mongoose");
const ObjectId = require("mongodb").ObjectID;

dotenv.config();

describe("Testing Donation models", () => {
  before(() => {
    mongoose.connect(process.env.MONGO_URL, config);
  });

  after((done) => {
    mongoose.connection.collections.donations.drop(() => done());
  });

  beforeEach((done) => {
    mongoose.connection.collections.donations.drop(() => done());
  });

  it("Creating new Donation", (done) => {
    const donation = new model({
      bloodDonorId: null,
      bloodDoneeId: new ObjectId("5d2bc2680ef58a2f8a24d438"),
      title: "Transfusion for a pacient",
      bloodType: "A+",
      description:
        "I Will be in a operation tomorrow and I need a blood transfusion ",
      accepted: true,
      created_at: new Date(),
      updated_at: new Date(),
    });
    donation.save().then(() => {
      assert(!donation.isNew);
      done();
    });
  });
});
