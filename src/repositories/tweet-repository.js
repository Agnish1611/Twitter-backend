const { Tweet } = require('../models');

class TweetRepository {
    async create(tweetData) {
        try {
            const tweet = await Tweet.create(tweetData);
            return tweet;
        } catch (error) {
            throw error;
        }
    }

    async destroy(tweetId) {
        try {
            const response = await Tweet.findByIdAndDelete(tweetId);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TweetRepository;