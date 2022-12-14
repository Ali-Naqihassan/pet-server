const mongoose = require("mongoose")

const usersModel = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  identity: {
    type: String,
  },
  petName: {
    type: String,
  },
  petdiscription: {
    type: String,
  },
  createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model("users", usersModel)
