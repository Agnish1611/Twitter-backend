const { User } = require('../models');

class UserRepository {
    async create(userData) {
        try {
            const user = User.create(userData);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async findUserById(id) {
        try {
            const user = User.findById(id);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async findUsers(filter) {
        try {
            const users = User.find(filter);
            return users;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserRepository;