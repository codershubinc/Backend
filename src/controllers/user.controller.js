import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/clowdenary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken"


const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken }


    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating access and refresh token")
    }
}


const registerUser = asyncHandler(async (req, res) => {
    //get user details from frontend
    //validation -not empty
    // is user already registered
    //check for image  , check for avatar
    //upload them to cloudinary
    //create user object- create entry in db  
    //remove pass and refresh token field from user object
    //check if user creation
    //return res 


    const { username, email, password, fullName } = req.body
    if ([username, email, password, fullName].some((field) => field?.trim() === "")) {
        throw new ApiError("All fields are required", 400)
    }
    console.log('req files', req.files);

    //check if user already exists
    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })
    if (existedUser) {
        throw new ApiError(400, "User already exists with this username or email",)
    }

    let avatarLocalPath;
    if (req.files && Array.isArray(req.files?.avatar) && req.files?.avatar.length > 0) {
        avatarLocalPath = req.files?.avatar[0]?.path
    }
    // coverImage is optional
    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files?.coverImage) && req.files?.coverImage.length > 0) {
        coverImageLocalPath = req.files?.coverImage[0]?.path

    }
    console.log("coverImageLocalPath", coverImageLocalPath);
    console.log("avatarLocalPath", avatarLocalPath);

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if (!avatar) {
        throw new ApiError("Avatar upload failed", 400)
    }
    const user = await User.create(
        {
            fullName,
            username: username.toLowerCase(),
            email,
            password,
            avatar: avatar.url,
            coverImage: coverImage?.url || ''
        }
    )

    const findUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!findUser) {
        throw new ApiError("User registration failed", 500)

    }

    return res.status(201).json(
        new ApiResponse(
            200,
            findUser,
            "User created successfully"
        )
    )




})
const loginUser = asyncHandler(async (req, res) => {

    // req body -> data
    // username or email
    //find the user
    //password check
    //access and referesh token
    //send cookie

    const { email, username, password } = req.body
    console.log(email);

    if (!username && !email) {
        throw new ApiError(400, "username or email is required")
    }

    // Here is an alternative of above code based on logic discussed in video:
    // if (!(username || email)) {
    //     throw new ApiError(400, "username or email is required")

    // }
    const userFinding = await User.findOne({
        $or: [{ username }, { email }]
    })

    const userFindingPass = await User.findOne({
        $or: [{ username }, { email }]
    })

    console.log('userFindingPass', userFindingPass);

    if (!userFinding) {
        throw new ApiError(404, "User does not exist")
    }
    console.log(userFinding);
    const isPasswordValid = await userFinding.isPasswordCorrect(password)

    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid user credentials")
    }
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(userFinding._id)

    const loggedUser = await User.findById(userFinding._id).select("-password -refreshToken")

    const option = {
        httpOnly: true,
        secure: true,
    }
    return res.status(200)
        .cookie(
            "accessToken", accessToken, option
        ).cookie(
            "refreshToken", refreshToken, option
        ).json(
            new ApiResponse(
                200,
                {
                    user: loggedUser, accessToken, refreshToken
                },
                "User logged in successfully"

            )
        )


})

const logoutUser = asyncHandler(async (req, res) => {

    User.findByIdAndUpdate(req.user._id,
        {
            $set: {
                refreshToken: undefined
            }
        }, {
        new: true
    }
    )

    const option = {
        httpOnly: true,
        secure: true,
    }
    return res.status(200)
        .cookie(
            "accessToken", "", option
        ).cookie(
            "refreshToken", "", option
        ).json(
            new ApiResponse(
                200,
                {},
                "User logged out successfully"
            )
        )
})

const refreshAccessToken = asyncHandler(async (req, res) => {

    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken
    if (!incomingRefreshToken) {

        throw new ApiError(401, "Unauthorized request")
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )

        const user = await User.findById(decodedToken?.id)

        if (!user) {
            throw new ApiError(404, "Invalid Refresh Token")
        }

        if (incomingRefreshToken !== user?.refreshToken) {
            throw new ApiError(401, "Refresh Token is expired or invalid")
        }

        const option = {
            httpOnly: true,
            secure: true,
        }

        const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id)

        return res
            .status(200)
            .cookie(
                "accessToken", accessToken, option
            ).cookie(
                "refreshToken", refreshToken, option
            ).json(
                new ApiResponse(
                    200,
                    {
                        accessToken, refreshToken
                    },
                    "Access and Refresh Token generated successfully"
                )
            )
    } catch (error) {
        throw new ApiError(401, error.message || "Something went wrong while generating access and refresh token")
    }

})




export {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken

}