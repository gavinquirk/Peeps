const express = require('express');
const { getUsers, addUser, getUsersInRadius } = require('../controllers/users');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(getUsers)
  .post(addUser);

router.route('/:lat/:lng').get(getUsersInRadius);

module.exports = router;
