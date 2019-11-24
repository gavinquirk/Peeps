const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

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

// @desc      Delete User
// @route     DELETE /api/v1/auth/users/:id
// @access    Private/Admin
exports.deleteUser = asyncHandler(async (req, res, next) => {
  user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorResponse(`No user with the id of ${req.params.id}`),
      404
    );
  }

  user.remove();

  res.status(200).json({
    success: true,
    data: {}
  });
});
