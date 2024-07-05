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

    async findById(id) {
        try {
            let tags = await Hashtag.find();
            tags = tags.filter((tag) => {
                let flag=0;
                for (let i=0; i<tag.tweets.length; i++){
                    if (tag.tweets[i] == id) {
                        flag=1;
                        break;
                    }
                }
                return flag;
            });
            return tags;
        } catch (error) {
            throw error;
        }
    }

    async destroy(hashtagId) {
        try {
            const response = await Hashtag.findByIdAndDelete(hashtagId);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async update(hashtagId, data) {
        try {
            const response = await Hashtag.findByIdAndUpdate(hashtagId, data);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = HashtagRepository;