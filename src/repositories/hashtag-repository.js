const { Hashtag } = require('../models');

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

    async findTags(filter){
        try {
            const tags = await Hashtag.find(filter);
            return tags;
        } catch (error) {
            throw error;
        }
    }

    async findTagById(id){
        try {
            const tags = await Hashtag.findById(id).populate('tweets');
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

    async findByTweetId(id) {
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
}

module.exports = HashtagRepository;