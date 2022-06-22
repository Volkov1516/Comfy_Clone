import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import { notFound } from './middleware/notFound';

import testRouter from './routes/test';
import catalogRouter from './routes/catalog';

const app = express();

dotenv.config();

const PORT = 5000;

app.use(express.json());

app.use('/api/v1/test', testRouter);
app.use('/api/v1/catalog', catalogRouter);

app.use(notFound);

mongoose
    .connect(process.env.MONGODB_URI as string)
    .then(() => {
        app.listen(PORT, () => {
            console.log('Server is running on port 5000...');
        });
    })
    .catch((err) => console.log(err));