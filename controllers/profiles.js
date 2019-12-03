const Profile = require('../models/Profile');
const User = require('../models/User');

const ErrorResponse = require('../utils/errorResponse');

const asyncHandler = require('../middleware/async');

// @desc      Get All Profiles
// @route     GET /api/v1/profiles
// @access    Admin
exports.getProfiles = async (req, res, next) => {
  const profiles = await Profile.find().populate('user');

  res.status(200).json({ success: true, data: profiles });
};

// @desc      Add New Profile
// @route     POST /api/v1/profiles/:userId
// @access    Admin
exports.addProfile = async (req, res, next) => {
  const userId = req.params.userId;
  req.body.user = userId;

  // Get user by user id
  const user = await User.findById(userId);

  // Check if user exists
  if (!user) {
    return next(new ErrorResponse(`No user with the id of ${userId}`), 404);
  }

  const profileData = { ...req.body };

  profileData.name = user.name;
  profileData.email = user.email;

  profileData.location = {
    type: 'Point',
    coordinates: req.body.location
  };

  const profile = await Profile.create(profileData);

  res.status(201).json({ success: true, data: profile });
};

// @desc      Update location coordinates
// @route     PUT /api/v1/profiles/:lat/:lng
// @access    Private
exports.updateLocation = asyncHandler(async (req, res, next) => {
  // Retrieve user id
  const user = req.user.id;

  // Retrieve lat and lng from url params
  const { lat, lng } = req.params;

  // Retrieve user profile
  const userProfile = await Profile.findOne({ user });

  // Create location data object
  userProfile.location = {
    type: 'Point',
    coordinates: [lat, lng]
  };

  // Update the profile with new data
  const updatedProfile = await Profile.findByIdAndUpdate(
    userProfile.id,
    userProfile,
    {
      new: true,
      runValidators: true
    }
  );

  res.status(200).json({ success: true, data: updatedProfile });
});

// @desc      Get all profiles in radius
// @route     GET /api/v1/profiles/:lat/:lng
// @access    Private
exports.getProfilesInRadius = asyncHandler(async (req, res, next) => {
  // Retrieve lat and lng from url params
  const { lat, lng } = req.params;

  // Calculate radius by dividing distance (mi) by radius of Earth
  const distance = 0.25;
  const radius = distance / 3963;

  // Find profiles within radius
  const profiles = await Profile.find({
    location: { $geoWithin: { $centerSphere: [[lat, lng], radius] } }
  });

  res
    .status(200)
    .json({ success: true, count: profiles.length, data: profiles });
});
