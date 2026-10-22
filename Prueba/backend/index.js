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

app.use((error, req, res, next) => {
    if (error instanceof SyntaxError && error.status === 400 && 'body' in error) {
        return res.status(400).json({
            message: 'JSON inválido. Envía un objeto JSON, sin comillas alrededor del objeto.'
        })
    }

    next(error)
})

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
