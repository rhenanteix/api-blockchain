const mongoose = require('mongoose')

const offersSchema = new mongoose.Schema({
 offers: {
     type: Number
 },
 wallet_id: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'wallet'
 },
  balance: {
      type: Number,
      default: 10
  },
  favorite: {
      type: Boolean,
      default: false
  },
},
{ timestamps: true }
)

module.exports = mongoose.model('offers', offersSchema)
