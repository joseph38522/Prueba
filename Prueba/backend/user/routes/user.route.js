import express from 'express'

import userController from '../controller/user.controller.js'

const userRoutes = express.Router()

userRoutes.get('/Get-users', userController.getUsers)

userRoutes.post('/Post-user', userController.saveUsers)

userRoutes.put('/Put-user/:id', userController.updateUser)

userRoutes.delete('/Delete-user/:id', userController.deleteUser)

export default userRoutes