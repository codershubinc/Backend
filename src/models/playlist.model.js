import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const playlistSchema = new Schema({

    name: {
        type: String,
        required: true

    },
    videos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Video'

        }
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

}, {
    timestamps: true
}
)



export const Playlist = mongoose.model('Playlist', playlistSchema)