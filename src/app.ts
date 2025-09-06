
import express, { Application } from 'express';
import cors from 'cors';
import routes from '@routes/index';
import { notFound, errorHandler } from '@middlewares';

const app: Application = express();


// ----- Pipelines ----- //
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());

// Routes
app.use('/api', routes);

// Not Found Handling
app.use(notFound);

// Error Handling
app.use(errorHandler);

export default app;