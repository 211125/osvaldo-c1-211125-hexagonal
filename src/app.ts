import express from 'express';
import { Signale } from 'signale';
import { bookRouter } from './book/infraestructure/bookRouter';
<<<<<<< HEAD
import { usersRouter } from './users/infraestructure/usersRouter';
import { authRouter } from './auth/infraestructure/authRouter';
import { reviewsRouter } from './review/infraestructure/reviewRouter';



=======
import { userRoutes } from './user/infraestructure/userRouter';
import { reviewRouter } from './review/infrestructure/reviewRoutes';
>>>>>>> dev

const app = express();
const signale = new Signale();

app.use(express.json());
<<<<<<< HEAD
app.use('/books', bookRouter);
app.use('/user',usersRouter);
app.use('/auth', authRouter);
app.use('/review',reviewsRouter);

async function startServer() {
    try {
        // Primero inicializa y conecta la base de datos
        await initializeDatabase();
        
        // Luego inicia el servidor Express
=======
app.use('/api/v1/books', bookRouter);
app.use('/api/v1/user',userRoutes);
app.use('/api/v1/review',reviewRouter);

async function startServer() {
    try {
>>>>>>> dev
        app.listen(3000, () => {
            signale.success("Server online in port 3000");
        });
    } catch (error) {
        signale.error("Error al iniciar el servidor:", error);
    }
}

startServer();
