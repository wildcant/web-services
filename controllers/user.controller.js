// const httpStatus = require('http-status');
const User = require('../models/user.model');

/**
 * Get user details
 * @public
 */

exports.getUser = async (req, res, next) => {
  try {
    console.log(req);
    const user = await User.get(req.params.userID);
    //user.password = undefined;
    res.json(user);
  } catch (error) {
    next(error);
  }
};
