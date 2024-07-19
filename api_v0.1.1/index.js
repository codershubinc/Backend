import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '16kb' }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

import RandomUserRoutes from './src/routes/randomUser/randomUser.router.js';
app.use('/v0.1/random_user', RandomUserRoutes)
import RandomImageRoutes from './src/routes/random_images/randomImage.router.js';
app.use('/v0.1/random_image', RandomImageRoutes)