import express from 'express';
import { Signale } from 'signale';
import { bookRouter } from './book/infraestructure/bookRouter';
import { userRoutes } from './user/infraestructure/userRouter';
import { reviewRouter } from './review/infrestructure/reviewRoutes';

const app = express();
const signale = new Signale();

app.use(express.json());
app.use('/api/v1/books', bookRouter);
app.use('/api/v1/user',userRoutes);
app.use('/api/v1/review',reviewRouter);

async function startServer() {
    try {
        app.listen(3000, () => {
            signale.success("Server online in port 3000");
        });
    } catch (error) {
        signale.error("Error al iniciar el servidor:", error);
    }
}

startServer();
