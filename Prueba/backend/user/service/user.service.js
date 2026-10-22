import { AppDataSource } from '../../config/data.source.js'

import User from '../model/user.model.js'

class UserService {

    constructor() {
        this.userRepository = AppDataSource.getRepository(User)
    }

    async getAll() {
        return await this.userRepository.find()
    }

    async save(data) {
        const user = this.userRepository.create(data)

        return await this.userRepository.save(user)
    }

    async update(id, data) {
        await this.userRepository.update(id, data)

        return await this.userRepository.findOneBy({
            id: Number(id)
        })
    }

    async delete(id) {
        return await this.userRepository.delete(id)
    }
}

export default new UserService()