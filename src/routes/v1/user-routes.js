const express = require('express');

const { UserController } = require('../../controllers');

const router = express.Router();

// /api/v1/user/signup POST
router.post('/signup',
    UserController.signup);

module.exports = router;