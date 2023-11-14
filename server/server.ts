import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import articleRoutes from './routes/articleRoutes';

const prisma = new PrismaClient();
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use('/articles', articleRoutes);


app.get('/', (req: Request, res: Response) => {
    res.send('GET request to the homepage');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

