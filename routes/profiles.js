const express = require('express');
const {
  getProfiles,
  addProfile,
  getProfilesInRadius,
  updateLocation
} = require('../controllers/profiles');

const router = express.Router({ mergeParams: true });

const { protect } = require('../middleware/auth');

router.route('/').get(getProfiles);

router.route('/:userId').post(addProfile);

router
  .route('/:lat/:lng')
  .get(getProfilesInRadius)
  .put(protect, updateLocation);

module.exports = router;
