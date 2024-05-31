import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const tweetSchema = new Schema({

    content: {
        type: String,
        required: true
    }, 
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})


export const Tweet = mongoose.model('Tweet', tweetSchema)


