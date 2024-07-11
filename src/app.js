import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({
    limit: '16kb'
}))

app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))

app.use(express.static('public'))

app.use(cookieParser())

// routes

import router from './routes/user.routes.js'
console.log('app.js');
// routes declaration
app.use("/api/v1/users", router)

import tweetRouter from './routes/tweet.routes.js'

app.use("/api/v1/tweets", tweetRouter)

import apiTestRouter from './routes/testapi.routes.js'

app.use("/api/v1/test-api", apiTestRouter)

export { app }