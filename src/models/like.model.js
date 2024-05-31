import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const likeSchema = new Schema({

    video: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video',

    },
    comment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    },
    tweet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet',
    },
    likedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',

    }
}, {
    timestamps: true
}
)



export const Like = mongoose.model('Like', likeSchema)