import { EntitySchema } from 'typeorm'

const User = new EntitySchema({
    name: 'User',
    tableName: 'users',

    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true
        },

        name: {
            type: 'varchar',
            length: 100
        },

        edad: {
            type: 'int',
            nullable: true
        },

        genero: {
            type: 'enum',
            enum: ['Masculino', 'Femenino', 'Otro'],
            default: 'Otro'
        },

        direccion: {
            type: 'varchar',
            length: 100,
            default: ''
        },

        role: {
            type: 'varchar',
            length: 20,
            default: 'user'
        },

        status: {
            type: 'varchar',
            length: 20,
            default: 'active'
        },

        createdAt: {
            type: 'timestamptz',
            createDate: true
        },

        updatedAt: {
            type: 'timestamptz',
            updateDate: true
        }
    }
})

export default User
