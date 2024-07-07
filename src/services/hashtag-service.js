const { HashtagRepository } = require('../repositories');

class HashtagService {
    constructor() {
        this.hashtagRepository = new HashtagRepository();
    }

    async search(filter) {
        try {
            const tags = await this.hashtagRepository.findTags({title: {$regex: filter, $options: 'i'}});
            return tags;
        } catch (error) {
            throw error;
        }
    }

    async getTag(id) {
        try {
            const tag  = await this.hashtagRepository.findTagById(id);
            return tag;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = HashtagService;