const express = require('express');
const router = express.Router();
const emailOTP = require('../../Private/OTP/email')


router.get('/emailotp', emailOTP);

module.exports = router;