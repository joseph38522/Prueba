import 'dotenv/config'

import express from 'express'

import { AppDataSource } from './config/data.source.js'

import userRoutes from './user/routes/user.route.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Joseph')
})

app.use('/user', userRoutes)

AppDataSource.initialize()
    .then(() => {
        console.log('Base de datos conectada')

        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`)
        })
    })
    .catch((error) => {
        console.error('Error al conectar la base de datos:', error)
        process.exit(1)
    })
