import express from 'express';
import cors from 'cors'; 

const app = express();
const port = 3000;

// CORS configuration
// const corsOptions = {
//     origin: [
//         'http://localhost:3001',
//     ],
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

// Middleware configuration
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
    limit: '16kb'
}));

// Import routes
import homePageRoutes from './src/routes/homePage.routes.js';
import api_v0_1_router from './src/routes/api/v0.1/index.routes.js';
import  api_v1_0_router from './src/routes/api/v1.0/index.routes.js';

// Use routes
app.use('/', homePageRoutes);
app.use('/v0.1/', api_v0_1_router);
app.use('/v1.0/', api_v1_0_router);


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});