import express from 'express';
import cors from 'cors';

const app = express();
const corsRes = {
    origin: [
        'http://localhost:3001',
    ]
}

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '16kb' }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

import RandomUserRoutes from './src/routes/randomUser/randomUser.router.js';
app.use('/v0.1/random_user',  cors(corsRes) , RandomUserRoutes)
import RandomImageRoutes from './src/routes/randomImages/randomImage.router.js';
app.use('/v0.1/random_image',  cors(corsRes) , RandomImageRoutes)