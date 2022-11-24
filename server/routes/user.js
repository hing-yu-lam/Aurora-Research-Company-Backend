/*******************************
File Name: user.js
Description: It is the user controller to do specific actions.
Web app name: Aurora Research Company
Team name: A-Star
Team Members:
  Kuo, Yi-Cheng (301181514)
  Yeung, Lok Ki (301252535)
  Lam, Hing Yu (301257216)
  Chung, Ting Hin (301287013)
  Le, Hoang Long (301236235)
********************************/

const express = require('express');
const router = express();
const controller = require('../controllers/user');

/* Sign Up request */
router.post('/register', controller.register);

/* Sign In Request */
router.post('/login', controller.login);

/* Sign out Request */
router.post('/logout', controller.logout);

module.exports = router;