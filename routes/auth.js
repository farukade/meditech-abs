var express = require('express');
var router = express.Router();
const controller = require('../controllers/index');


// console.log(controller)
// signup a new user
router.post('/signup', controller.auth.authController.signUp);

// signin a user
router.post('/signin', controller.auth.authController.signIn);


module.exports = router;
