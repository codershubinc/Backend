import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import express from 'express'

const app = express()

const connectDB = async () => {
    console.log('connecting to db');
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI} /${DB_NAME}`)
        console.log(' mongo db connected connectionInstance', connectionInstance.connection.host );

    } catch (error) {
        console.log('error in connection db /n', error);
        process.exit(1)
    }
}
export default connectDB