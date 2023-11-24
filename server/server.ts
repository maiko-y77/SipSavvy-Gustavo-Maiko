import express, { Request, Response } from 'express';

import articleRoutes from './routes/articleRoutes';
import userRoutes from './routes/userRoutes';
import cors from 'cors';


const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  res.send('GET request to the homepage');
});

app.use('/articles', articleRoutes);
app.use('/user', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


/**
 * 
enum Role {
  ADMIN
  WRITER
  READER
}

 */