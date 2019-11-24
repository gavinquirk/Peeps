const User = require('../models/User');

const asyncHandler = require('../middleware/async');

// @desc      Get All Users
// @route     GET /api/v1/users
// @access    Private/Admin
exports.getUsers = async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({ success: true, data: users });
};

// @desc      Add New User
// @route     POST /api/v1/users
// @access    Private/Admin
exports.addUser = async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({ success: true, data: user });
};

// @desc      Get all users in radius
// @route     GET /api/v1/users/:lat/:lng
// @access    Private
exports.getUsersInRadius = asyncHandler(async (req, res, next) => {
  // Retrieve lat and lng from url params
  const { lat, lng } = req.params;

  // Calculate radius by dividing distance (mi) by radius of Earth
  const distance = 0.25;
  const radius = distance / 3963;

  // Find users within radius
  const users = await User.find({
    location: { $geoWithin: { $centerSphere: [[lat, lng], radius] } }
  });

  res.status(200).json({ success: true, count: users.length, data: users });
});
