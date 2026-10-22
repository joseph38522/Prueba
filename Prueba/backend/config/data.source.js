import 'dotenv/config'

import { DataSource } from 'typeorm'

import User from '../user/model/user.model.js'

if (!process.env.DATABASE_URL) {
    throw new Error('Falta la variable DATABASE_URL en el archivo .env')
}

export const AppDataSource = new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    },
    synchronize: true,
    entities: [User]
})
