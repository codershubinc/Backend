import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/responce.api.js";


const router = Router()
const apiRes = {
    test: 'test',
    test2: 'test2',

}
const getCurrentUser = asyncHandler(async (req, res) => {
    return res.status(200).json(
        new ApiResponse(
            200,
            {
                user: apiRes 
            },
            "User fetched successfully"
        )
    )
})

router.route('/').get(getCurrentUser) 

export default router