import dotenv from "dotenv";
import mysql from "mysql2/promise";
import { Signale } from "signale";

const signale = new Signale();
dotenv.config(); 
const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
};

<<<<<<< HEAD
export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    database: 'SOA',
    username: 'angelito',
    password: '211125',
    models: [BookModel, UserModel, ReviewModel],
});
=======
const pool = mysql.createPool(config);
>>>>>>> dev

export async function query(sql: string, params?: any[]) {
    try {
        const conn = await pool.getConnection();
        signale.success("Conexión exitosa a la BD");
        const result = await conn.execute(sql, params);
        conn.release();
        return result;
    } catch (error) {
        console.log(process.env.DB_HOST); 
        signale.error(error);
        return null;
    }
}
