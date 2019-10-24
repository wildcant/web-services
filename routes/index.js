const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const userRoutes = require('./user.route');

const dbUri = "mongodb+srv://will:CB27d277@dbc-g3n5u.mongodb.net/Demo?retryWrites=true&w=majority";

// mongoose setup
mongoose.Promise = global.Promise;
const parseConfig = {
  useNewUrlParser: true
};
mongoose.set('useCreateIndex', true);
mongoose.set("useUnifiedTopology", true);
mongoose.set('useFindAndModify', false);


mongoose.connect(dbUri, parseConfig, (err) => {
  if (err) {
    console.log("error", err);
  } else {
    if (dbUri.indexOf('localhost') !== -1) {
      console.log('MongoDB(local) connected');
    } else {
      console.log('MongoDB(remote) connected');
    }
  }
});

router.use('/users', userRoutes);
module.exports = router;
