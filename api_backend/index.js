const express = require('express');
import Random from './randImage';
import cors from 'cors';

const app = express();
const coreOptions = {
    origin: ['http://localhost:3000'],
    optionsSuccessStatus: 200
}
const packageJsonApi = {
    "name": "api_backend",
    "version": "1.0.0",
    "description": "api hub",
    "main": "index.js",
    "scripts": {
        "test": "dev ",
        "dev": "node index.js",
        "start": "node index.js",
        "build": "node index.js"
    },
    "keywords": [
        "api"
    ],
    "author": "swapnil ingle",
    "license": "ISC",
    "dependencies": {
        "express": "^4.19.2"
    }
}


app.get("/", cors(), (req, res) => {
    res.send("Hello World!");
});
app.get("/api", cors(coreOptions), (req, res) => {
    res.json(

        {
            name: "test user",
            age: 25,
            city: "Pune",
            country: "India",
            state: "Maharashtra",
            pincode: 411001,
            phone: 1234567890,
        }
    )
})
app.get("/api/json", cors(coreOptions), (req, res) => {
    res.json(packageJsonApi)
})
app.get("/api/randImage", cors(coreOptions), (req, res) => {
    const imageUrl = Random.Avatar({ avatarStyle: 'auto', query: 'auto', imageType: 'svg', queryLength: 4 })
    res.json(
        {
            image: imageUrl,
            imageType: 'svg',
            request: req
        }
    )
})
app.listen(3001)

