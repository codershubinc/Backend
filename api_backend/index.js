const express = require('express');
import Random from './randImage';

const app = express();
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


app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/api", (req, res) => {
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
app.get("/api/json", (req, res) => {
    res.json(packageJsonApi)
})
app.get("/api/randImage", (req, res) => {
    res.json(
        Random.Avatar({ avatarStyle: 'auto', query: 'auto', imageType: 'svg', queryLength: 4 })
    )
})
app.listen(3001)

