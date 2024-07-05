const express = require('express');

const { TweetController } = require('../../controllers');

const router = express.Router();

// /api/v1/airport POST
router.post('/',
    TweetController.createTweet);

// /api/v1/airport/:id DELETE
router.delete('/:id', 
    TweetController.deleteTweet);

module.exports = router;