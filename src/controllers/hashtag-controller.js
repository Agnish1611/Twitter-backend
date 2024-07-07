const { HashtagService } = require('../services');

const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

const hashtagService = new HashtagService();

const searchTags = async (req, res) => {
    try {
        const tags = await hashtagService.search(req.query.search);
        SuccessResponse.data = tags;
        SuccessResponse.message = 'Successfully fetched the tags';
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

const getTag = async (req, res) => {
    try {
        const tag = await hashtagService.getTag(req.params.id);
        SuccessResponse.data = tag;
        SuccessResponse.message = 'Successfully fetched the tag';
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

module.exports = {
    searchTags,
    getTag
}