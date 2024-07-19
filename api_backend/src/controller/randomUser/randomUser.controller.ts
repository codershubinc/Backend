import Random from "../../lib/func/randImage"
import smallUsers from "../../lib/func/userData0"
import users from "../../lib/func/userData1"
import bigUsers from "../../lib/func/userData2"
import { asyncHandler } from "../../utils/asyncHandler"
import { ApiError } from "../../utils/responce/api/error.api"
import { ApiResponse } from "../../utils/responce/api/responce.api"


const RandomUserGanarator = asyncHandler(async (req, res) => {

    const randomUser = Random.FromAnArray(smallUsers)
    const randomUserData = {
        user: randomUser
    }

    return res.status(200).json(
        new ApiResponse(

            200,
            randomUserData,
            'Successfully fetched random user'

        )
    )

})

const RandomUserGeneratorError = asyncHandler(async (req, res) => {
    return res.status(400).json(
        new ApiError(
            400,
            'Bad Request',
            [
                'Fatal Error',
                'General Access prohibited by policy'
            ]
        )
    );
});

const RandomBigUserGanarator = asyncHandler(async (req, res) => {
    const randomUser = Random.FromAnArray(users)
    const randomUserData = {
        user: randomUser
    }
    return res.status(200).json(
        new ApiResponse(
            200,
            randomUserData,
            'Successfully fetched random user'
        )
    )

})

const RandomBig0UserGanarator = asyncHandler(async (req, res) => {
    const randomUser = Random.FromAnArray(bigUsers)
    const randomUserData = {
        user: randomUser
    }
    return res.status(200).json(
        new ApiResponse(
            200,
            randomUserData,
            'Successfully fetched random user'
        )
    )
})
export {
    RandomUserGanarator,
    RandomUserGeneratorError,
    RandomBigUserGanarator,
    RandomBig0UserGanarator
}