const express = require('express')
const { route } = require('express/lib/router')
const router = express.Router()

const {
createOffers,
getOffers,
deleteOffers,
favoriteOffers
//updateCities,
} = require('../controllers/offersController')

router.route('/createOffers').post(createOffers)
// router.route('/allCities').get(getAllCities)
router.route('/list/:id').get(getOffers)
router.route('/delete/:id').delete(deleteOffers)
router.route('/favorite/:id').post(favoriteOffers)
// router.route('/update/:id').put(updateCities)

// router
//   .route('/:id')
//   .get(getJob)
//   .patch(
//     [authenticateUser, authorizePermissions('admin', 'company')],
//     updateJob
//   )
//   .delete(
//     [authenticateUser, authorizePermissions('admin', 'company')],
//     deleteJob
//   )

module.exports = router
