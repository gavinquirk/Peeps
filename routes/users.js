const express = require('express');
const { getUsers, addUser, deleteUser } = require('../controllers/users');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(getUsers)
  .post(addUser);

router.route('/:id').delete(deleteUser);

module.exports = router;
