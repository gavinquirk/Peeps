const User = require('../models/User');

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
