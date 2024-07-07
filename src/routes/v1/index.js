const express = require('express');

const tweetRoutes = require('./tweet-routes');
const hashtagRoutes = require('./hashtag-routes');

const router = express.Router();

router.use('/tweet', tweetRoutes);
router.use('/hashtag', hashtagRoutes);

module.exports = router;