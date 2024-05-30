import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import User from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/clowdenary.js";
import { ApiResponse } from "../utils/ApiResponse.js";


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

    //check if user already exists
    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })
    if (existedUser) {
        throw new ApiError("User already exists with this username or email", 400)
    }
    const avatarLocalPath = req.body?.avatar[0]?.path
    const coverImageLocalPath = req.body?.coverImage[0]?.path

    if (!avatarLocalPath) {
        throw new ApiError("Avatar is required", 400)
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

export { registerUser }