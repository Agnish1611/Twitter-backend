const express = require('express');

const { TweetController } = require('../../controllers');

const router = express.Router();

// /api/v1/tweet POST
router.post('/',
    TweetController.createTweet);

// /api/v1/tweet/:id DELETE
router.delete('/:id', 
    TweetController.deleteTweet);

module.exports = router;