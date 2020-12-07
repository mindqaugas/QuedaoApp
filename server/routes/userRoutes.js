const express = require('express');
const router = express.Router();
const { auth } = require('../auth/userAuth');

const UserController = require('../controllers/userController');

/*
 * @route     POST  /api/user
 * @access    all users
 * @desc      POST get user or create new
 */
// router.post('/', UserController.userCreateReturn);

/*
 * @route     update  /api/user/update
 * @access    all users
 * @desc      update user settings data
 */
router.post('/update', auth, UserController.userSettingsUpdate);

/*
 * @route     POST  /api/user/register
 * @access    all users
 * @desc      POST register new user
 */
router.post('/register', UserController.userRegister);

/*
 * @route     POST  /api/user/verify
 * @access    registered users
 * @desc      POST send verification code and login user
 */
router.post('/verify', UserController.userVerifyCode);

/*
 * @route     POST  /api/user/resend-code
 * @access    all users
 * @desc      POST send verification code
 */
router.post('/resend-code', UserController.userResendCode);

/*
 * @route     POST  /api/user/send-password
 * @access    all users
 * @desc      POST send new password to email
 */
router.post('/send-password', UserController.userSendPassword);

/*
 * @route     POST  /api/user/forgot-password
 * @access    all users
 * @desc      POST send new password to email
 */
router.post('/reset-password', UserController.userResetPassword);

/*
 * @route     POST  /api/user/login-user
 * @access    all users
 * @desc      POST login userl
 */
router.post('/login-user', UserController.loginUser);
module.exports = router;