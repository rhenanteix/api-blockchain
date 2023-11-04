const Offers = require('../models/offers')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')

//! POST Offers
const createOffers = async (req, res) => {
    const offers = await Offers.create(req.body)
  res.status(StatusCodes.CREATED).json(offers)
  console.log(JSON.stringify(offers))
}

/// ! GET Offers
const getOffers = async (req, res) => {
  const { id: offersId } = req.params
  const offers = await Offers.findOne({ _id: offersId })
  if (!offers) {
    throw new CustomError.NotFoundError(`No Offers with id : ${offersId}`)
  }
  res.status(StatusCodes.OK).json(offers)
}

/// Favorite Offers
const favoriteOffers = async (req, res) => {
  const { id: offersId } = req.params
  
  const offers = await Offers.updateOne({ _id: offersId }, { $set: { favorite: true }})
  if (!offers) {
    throw new CustomError.NotFoundError(`No Offers with id : ${offersId}`)
  }
  res.status(StatusCodes.OK).json(offers)
}
// Models.post.Post.findOneAndUpdate({ _id: res._id }, { $inc: { views: 1 } }, {new: true },function(err, response) {
//   if (err) {
//   callback(err);
//  } else {
//   callback(response);
//  }




//! DELETE Offers
const deleteOffers = async (req, res) => {
  const { id: offersId } = req.params
  const offers = await Offers.findOne({ _id: offersId })

  if (!offers) {
    throw new CustomError.NotFoundError(`No job with id : ${offersId}`)
  }

  await Offers.findOneAndRemove({ OffersID: offersId })
  await offers.remove()
  res.status(StatusCodes.OK).json({ msg: 'Success! Offers removed.' })
}

module.exports = {
  createOffers,
  getOffers,
  deleteOffers,
  favoriteOffers,
}
