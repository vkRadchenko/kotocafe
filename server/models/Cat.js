const { Schema, model } = require('mongoose')

const shema = new Schema(
  {
    name: { type: String },
    sex: { type: String, enum: ['Кошка', 'Кот'] },
    breed: { type: Schema.Types.ObjectId, ref: 'Breed' },
    quality: [{ type: Schema.Types.ObjectId, ref: 'Quality' }],
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    image: String,
    age: String,
    health: String,
    history: String,
    temper: String,
  },
  {
    timestamps: { createdAt: 'created_at' },
  }
)

module.exports = model('Cat', shema)
