const express = require('express');
const {
  getProfiles,
  addProfile,
  getProfilesInRadius
} = require('../controllers/profiles');

const router = express.Router({ mergeParams: true });

router.route('/').get(getProfiles);

router.route('/:userId').post(addProfile);

router.route('/:lat/:lng').get(getProfilesInRadius);

module.exports = router;
