import userService from '../service/user.service.js'

class UserController {

    async getUsers(req, res) {
        try {
            const users = await userService.getAll()

            res.status(200).json(users)
        } catch (error) {
            res.status(500).json({
                message: 'Error al obtener los usuarios',
                error: error.message
            })
        }
    }

    async saveUsers(req, res) {
        try {
            const user = await userService.save(req.body)

            res.status(201).json(user)
        } catch (error) {
            res.status(500).json({
                message: 'Error al guardar el usuario',
                error: error.message
            })
        }
    }

    async updateUser(req, res) {
        try {
            const user = await userService.update(
                req.params.id,
                req.body
            )

            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({
                message: 'Error al actualizar el usuario',
                error: error.message
            })
        }
    }

    async deleteUser(req, res) {
        try {
            await userService.delete(req.params.id)

            res.status(200).json({
                message: 'Usuario eliminado correctamente'
            })
        } catch (error) {
            res.status(500).json({
                message: 'Error al eliminar el usuario',
                error: error.message
            })
        }
    }
}

export default new UserController()