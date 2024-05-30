// require('dotenv').config({ path: '/.env' })
import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import express from 'express'

const app = express()

dotenv.config({ path: '/.env' })

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log('server is running on port', process.env.PORT);
        })
        app.on('error', (error) => {
            console.log('error at app connection', error);
            throw error
        })

    })
    .catch((error) => {
        console.log('error in connection db /n', error);
        process.exit(1)
    })


/*    ; (async () => {
        try {
            await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
            app.on('error', (error) => {
                console.log('error', error);
                throw error
            })
            app.listen(process.env.PORT, () => {
                console.log('server is running on port', process.env.PORT);
            })

        } catch (error) {
            console.log('error', error);
        }
    })()
*/