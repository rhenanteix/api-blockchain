const mongoose = require('mongoose')

const walletSchema = new mongoose.Schema({
  name_wallet: {
      type: String,
  },
},
{ timestamps: true }
)

module.exports = mongoose.model('wallet', walletSchema)
