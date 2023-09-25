// sequelize.ts

import { Sequelize } from 'sequelize-typescript';
import BookModel from '../book/infraestructure/models/BookModel';
import UserModel from '../users/infraestructure/models/userModel';
import ReviewModel from '../review/infraestructure/models/reviewModel';

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    database: 'SOA',
    username: 'angelito',
    password: '211125',
    models: [BookModel, UserModel, ReviewModel],
});

export async function initializeDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Conexión establecida correctamente.');
        await sequelize.sync({ force: false });
    } catch (err) {
        console.error('No se pudo conectar a la base de datos:', err);
        process.exit(1);  // Cierra la aplicación si hay un error de conexión
    }
}






