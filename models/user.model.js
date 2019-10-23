const mongoose = require("mongoose");
var httpStatus = require("http-status");
const APIError = require('../utils/APIError');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  lastname: String,
  email: String,
  password: String,
  department: String,
  city: String,
});

userSchema.statics = {
  /**
   * Get User
   *
   * @param {ObjectId} id - The objectId of user.
   * @returns {Promise<User, APIError>}
   */
  async get(id) {
    try {
      let user;

      if (mongoose.Types.ObjectId.isValid(id)) {
        user = await this.findById(id).exec();
      }
      if (user) {
        return user;
      }

      throw new APIError({
        message: 'User does not exist',
        status: httpStatus.NOT_FOUND
      });
    } catch (error) {
      throw error;
    }
  }
}

const user = mongoose.model("usuarios", userSchema);
module.exports = user;