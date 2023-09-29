import express from 'express';
import { Signale } from 'signale';
import { initializeDatabase } from './database/sequelize'; 
import { bookRouter } from './book/infraestructure/bookRouter';
import { usersRouter } from './users/infraestructure/usersRouter';
import { authRouter } from './auth/infraestructure/authRouter';
import { reviewsRouter } from './review/infraestructure/reviewRouter';




const app = express();
const signale = new Signale();

app.use(express.json());
app.use('/books', bookRouter);
app.use('/user',usersRouter);
app.use('/auth', authRouter);
app.use('/review',reviewsRouter);

async function startServer() {
    try {
        // Primero inicializa y conecta la base de datos
        await initializeDatabase();
        
        // Luego inicia el servidor Express
        app.listen(3000, () => {
            signale.success("Server online in port 3000");
        });
    } catch (error) {
        signale.error("Error al iniciar el servidor:", error);
    }
}

// Inicia todo
startServer();
