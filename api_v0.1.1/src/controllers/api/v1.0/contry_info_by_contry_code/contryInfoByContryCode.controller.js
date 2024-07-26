import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { ApiError } from "../../../../utils/responce/api/error.api.js";
import { ApiResponse } from "../../../../utils/responce/api/responce.api.js";
import data from "../../../../lib/func/contryByInfoContryCode.js"

const country = asyncHandler(async (req, res) => {
    const { contryCode } = req.params

    const contryInfo = await data(contryCode)
    if (!contryInfo) {
        return res.status(404).json(
            new ApiError(
                404,
                'Bad Request',
                [
                    'Fatal Error',
                    'Invalid contry code',
                    {
                        valid_contry_codes: [
                            "AU",
                            "BR",
                            "CA",
                            "CH",
                            "DE",
                            "DK",
                            "ES",
                            "GB",
                            "IN",
                            "US",
                        ]
                    }
                ]
            )
        )
    }
    return res.status(200).json(
        new ApiResponse(
            200,
            contryInfo,
            'Successfully fetched contry info'
        )

    )
})

const countryDetail = asyncHandler(async (req, res) => {
    const { contryCode , contryDetail } = req.params
    const contryInfo = await data(contryCode)
    if (!contryInfo) {
        return res.status(404).json(
            new ApiError(
                404,
                'Bad Request',
                [
                    'Fatal Error',
                    'Invalid contry code',
                    {
                        valid_contry_codes: [
                            "AU",
                            "BR",
                            "CA",
                            "CH",
                            "DE",
                            "DK",
                            "ES",
                            "GB",
                            "IN",
                            "US",
                        ]
                    }
                ]
            )
        )
    }
    const detail = contryInfo[contryDetail]
    if (!detail) {
        return res.status(404).json(
            new ApiError(
                404,
                'Bad Request',
                [
                    'Fatal Error',
                    'Invalid contry detail',
                    {
                        valid_contry_detail: [
                            'firstName', 
                            'lastName',
                            'streets',
                            'states',
                            'citys',
                            'femaleFirst',
                            'maleFirst'
                        ]
                    }
                ]
            )
        )
        
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            detail,
            'Successfully fetched contry detail'
        )
    )
})

export {
    country,
    countryDetail
}
