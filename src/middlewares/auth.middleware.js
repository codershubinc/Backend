import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js";


export const verifyJWT = asyncHandler(
    async (req, res, next) => {
        try {
            const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")

            if (!token) {
                throw new ApiError("unauthorized token", 401)
            }

            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
            const user = await User.findById(decoded.id).select("-password -refreshToken")
            if (!user) {
                throw new ApiError("Invalid  Access token", 404)
            }

            req.user = user
            next()
        } catch (error) {
            throw new ApiError("unauthorized token", 401)
        }
    }
)