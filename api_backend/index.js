const express = require('express');

const app = express();

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
app.listen(3001);

