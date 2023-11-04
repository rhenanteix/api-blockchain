const mongoose = require('mongoose')

const coinsSchema = new mongoose.Schema({
  price: {
    type: Number,
  },
  amount: {
      type: String,
  },
},
{ timestamps: true }
)

module.exports = mongoose.model('coins', coinsSchema)
