import express from 'express';
import { Signale } from 'signale';

import { bookRouter } from './src/book/infraestructure/bookRouter';
import {authRouter} from "./src/auth/insfraestructure/authRouter";

const app = express();
const signale = new Signale();

app.use(express.json());
//app.use('/review',reviewRouter);
app.use('/books',bookRouter);
app.use('auth', authRouter);

app.listen(3000, () => {
    signale.success("Server online in port 3000");
});