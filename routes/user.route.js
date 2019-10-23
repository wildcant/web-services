const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');

router
  .route('/details/:userID')
  /**
   * @api {get} api/users/:userID | Get Product Details
   */
  .get(controller.getUser);

module.exports = router;
