const { Schema, model } = require('mongoose')

const shema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    image: String,
  },
  {
    timestamps: true,
  }
)

module.exports = model('User', shema)
