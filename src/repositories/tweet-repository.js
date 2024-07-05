const { Tweet } = require('../models/index');

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
            const tweet = await Tweet.findById(tweetId);
            const response = await tweet.deleteOne();
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TweetRepository;