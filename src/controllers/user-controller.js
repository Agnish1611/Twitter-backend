const { UserService } = require('../services');

const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

const userService = new UserService();

const signup = async (req, res) => {
    try {
        const user = await userService.create(req.body);
        SuccessResponse.data = user;
        SuccessResponse.message = 'Successfully signed up';
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

module.exports = {
    signup
}