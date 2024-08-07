const { UserRepository } = require('../repositories');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async search(filter) {
        try {
            const users = await this.userRepository.findUsers({title: {$regex: filter, $options: 'i'}});
            return users;
        } catch (error) {
            throw error;
        }
    }

    async getUser(id) {
        try {
            const user = await this.userRepository.findUserById(id);
            return user;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserService;