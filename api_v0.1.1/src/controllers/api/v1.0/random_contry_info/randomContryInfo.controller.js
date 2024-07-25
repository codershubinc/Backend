import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { data, RandomCountrySelector } from "../../../../lib/func/randomContrySelector.js";
import { ApiError } from "../../../../utils/responce/api/error.api.js";
import { ApiResponse } from "../../../../utils/responce/api/responce.api.js";


const randCountry = asyncHandler(async (req, res) => {

    const contryInfo = await data()
    if (!contryInfo) {
        return res.status(401).json(
            new ApiError(
                401,
                'Bad Request',
                [
                    'Fatal Error',
                    'ISomething went wrong',
                ]
            )
        )
    }
    return res.status(200).json(
        new ApiResponse(
            200,
            {
                info: contryInfo,
                code: RandomCountrySelector
            },
            'Successfully fetched contry info'
        )

    )
})

export default randCountry