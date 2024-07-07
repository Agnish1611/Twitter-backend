const { TweetRepository, HashtagRepository } = require('../repositories/index');

class TweetService{
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(tweetData) {
        try {
            const tweetContent = tweetData.content;

            let tags = Array.from(new Set(tweetContent.split(' ')));
            tags = tags.filter((tag) => {
                let flag=0;
                if (tag[0]=='#'){
                    flag=1;
                    for (let i=1;i<tag.length;i++){
                        if (!((tag[i]>='a' && tag[i]<='z') || (tag[i]>='A' && tag[i]<='Z') || (tag[i]>='0' && tag[i]<='9'))){
                            flag=0;
                            break;
                        }
                    }
                }
                return flag && tag!='#';
            });

            const tweet = await this.tweetRepository.create(tweetData);

            const presentTags = await this.hashtagRepository.findByName(tags);
            let presentTagsTitles = presentTags.map((tag) => {
                return tag.title;
            })

            let newTags = tags.filter((tag) => {
                return !(presentTagsTitles.includes(tag));
            });
            newTags = newTags.map((tag) => {
                return {
                    title: tag,
                    tweets: [tweet._id]
                }
            });

            await this.hashtagRepository.bulkCreate(newTags);
            
            presentTags.forEach((tag) => {
                tag.tweets.push(tweet._id);
                tag.save();
            });

            return tweet;
        } catch (error) {
            throw error;
        }
    }

    async destroy(tweetId) {
        try {
            const tags = await this.hashtagRepository.findByTweetId(tweetId);
            tags.forEach(async (tag) => {
                await tag.tweets.pull(tweetId);
                await tag.save();
                if (tag.tweets.length == 0){
                    await this.hashtagRepository.destroy(tag._id);
                }
            });
            const response = await this.tweetRepository.destroy(tweetId);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TweetService;