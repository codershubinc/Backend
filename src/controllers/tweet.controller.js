import { Tweet } from "../models/tweet.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiResponse } from "../utils/responce.api.js"

const createTweet = asyncHandler(async (req, res) => {
    console.log('creating a tweet for you');
    //TODO: create tweet
    console.log('req.body', req.body);
    const { tweet } = req.body
    const tweetSend = await Tweet.create(
        {
            content: tweet,
            owner: req.user
        }
    )
    console.log('tweetSend', tweetSend);
    return res.status(201).json(
        new ApiResponse(201, tweetSend, "Tweet created successfully")
    )

})

const getUserTweets = asyncHandler(async (req, res) => {
    // TODO: get user tweets 
})

const updateTweet = asyncHandler(async (req, res) => {
    //TODO: update tweet
})

const deleteTweet = asyncHandler(async (req, res) => {
    //TODO: delete tweet
})

export {
    createTweet,
    getUserTweets,
    updateTweet,
    deleteTweet
}
