const express = require('express');

const tweetRoutes = require('./tweet-routes');
const hashtagRoutes = require('./hashtag-routes');
const userRoutes = require('./user-routes');

const router = express.Router();

router.use('/tweet', tweetRoutes);
router.use('/hashtag', hashtagRoutes);
router.use('/user', userRoutes);

module.exports = router;