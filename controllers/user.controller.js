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
    const NUM_REQUESTS = 10;
    for (let i = 0; i < NUM_REQUESTS; i++){
      // crypto.pbkdf2Sync(password, salt, iterations, keylen, digest)
      console.time('op'+i);
      // crypto.pbkdf2Sync('secret', 'salt', 10000, 512, 'sha512');
      crypto.pbkdf2('secret', 'salt', 10000, 512, 'sha512', () => {});
      console.timeEnd('op'+i);
    }
    //user.password = undefined;
    res.json(user);
  } catch (error) {
    next(error);
  }
};
