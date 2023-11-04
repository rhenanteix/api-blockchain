const mongoose = require('mongoose');
const Coins = require('./models/coins');
const Wallet = require('./models/wallet')

mongoose.connect('mongodb+srv://rhenancontato:DV2S1njzu14wPG7i@cluster0.ltqxtr1.mongodb.net/blockchain', {
    useNewUrlParser: true, useUnifiedTopology: true
})
.then(() => {
    console.log('Opa foi')
})
.catch((err) => {
    console.log(err);
});

const seedCoins = [
    {
        price: "1",
        amount: "10"
    },
    {
        price: "2",
        amount: "20"
    },
    {
        price: "3",
        amount: "30"
    },

];

const seedWallet = [
    {
        name_wallet: "rhenan_wallet"
    },

];


const seedDB = async () => {
    await Coins.deleteMany({})
    await Coins.insertMany(seedCoins);
    await Wallet.insertMany(seedWallet);
};

seedDB().then(() => {
    mongoose.connection.close();
});