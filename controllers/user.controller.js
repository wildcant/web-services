// const httpStatus = require('http-status');
const User = require('../models/user.model');
const crypto = require("crypto");

/**
 * Get user details
 * @public
 */

exports.getUser = async (req, res, next) => {
  try {
    console.log(req);
    const user = await User.get(req.params.userID);
    res.json(user);
  } catch (error) {
    next(error);
  }
};
