const { TweetService } = require('../services');

const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

const tweetService = new TweetService();

const createTweet = async (req, res) => {
    try {
        const tweet = await tweetService.create(req.body);
        SuccessResponse.data = tweet;
        SuccessResponse.message = 'Successfully created the tweet';
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

const deleteTweet = async (req, res) => {
    try {
        const response = await tweetService.destroy(req.params.id);
        SuccessResponse.data = response;
        SuccessResponse.message = 'Successfully deleted the tweet';
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

module.exports = {
    createTweet,
    deleteTweet
}