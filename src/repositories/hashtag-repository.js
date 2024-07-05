const { Hashtag } = require('../models/index');

class HashtagRepository {
    async create(hashtag) {
        try {
            const tags = await Hashtag.create(hashtag);
            return tags;
        } catch (error) {
            throw error;
        }
    }

    async bulkCreate(hashtags) {
        try {
            const tags = await Hashtag.insertMany(hashtags);
            return tags;
        } catch (error) {
            throw error;
        }
    }

    async findByName(data) {
        try {
            const tags = await Hashtag.find({title: data});
            return tags;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = HashtagRepository;