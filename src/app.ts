import express from 'express';
import { Signale } from 'signale';
import { initializeDatabase } from './database/sequelize'; 
import { bookRouter } from './book/infraestructure/bookRouter';
import { usersRouter } from './users/infraestructure/usersRouter';
import { reviewsRouter } from './review/infraestructure/reviewRouter';




const app = express();
const signale = new Signale();

app.use(express.json());
app.use('/api/v1/book', bookRouter);
app.use('/api/v1/user',usersRouter);
app.use('/api/v1/review',reviewsRouter);

async function startServer() {
    try {
        await initializeDatabase();
        
        app.listen(3000, () => {
            signale.success("Server online in port 3000");
        });
    } catch (error) {
        signale.error("Error al iniciar el servidor:", error);
    }
}

// Inicia todo
startServer();
