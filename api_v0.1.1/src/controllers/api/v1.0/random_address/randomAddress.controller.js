import Random from "../../../../lib/func/Random.js";
import data from "./randomContrySelector.js";
import { ApiError } from "../../../../utils/responce/api/error.api.js"
import { ApiResponse } from "../../../../utils/responce/api/responce.api.js"


const RandomAddressGanarator = async (req, res) => {
    let addressData
    await data.then(data => addressData = data)
    if (!addressData) {
        return res.status(500).json(
            new ApiError(
                500,
                'Bad Request',
                [
                    'Fatal Error',
                ]
            )
        )
    }
    const randomAddress = {
        city: Random.FromAnArray(addressData.citys),
        co_ordinates: {
            latitude : Random.FromAnArray(['', "-"]) + Random.MinToMax(0, 100) + ',' + Random.MinToMax(1000, 10000),
            longitude : Random.FromAnArray(['', "-"]) + Random.MinToMax(0, 100) + ',' + Random.MinToMax(1000, 10000),
        },
        country: Random.FromAnArray(addressData.country),
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            randomAddress,
            'Successfully fetched random address'
        )
    )



}