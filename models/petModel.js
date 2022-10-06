const mongoose = require("mongoose")

const petModel = new mongoose.Schema({
  petName: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    default: "cat",
  },
  breed: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },

  image: {
    type: String,
  },
  identity: {
    type: String,
  },

  createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model("pet", petModel)
