const express = require('express');

const { HashtagController } = require('../../controllers');

const router = express.Router();

// /api/v1/hashtag?search=<hashtag> GET
router.get('/',
    HashtagController.searchTags);

// /api/v1/hashtag/:id GET
router.get('/:id',
    HashtagController.getTag);

module.exports = router;