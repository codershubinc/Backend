import randomAddress from "../../../../lib/func/randomAddress.js"
import { ApiResponse } from "../../../../utils/responce/api/responce.api.js"


const RandomAddressGanarator = async (req, res) => {
    const randomAddressData = await randomAddress()
    if (!randomAddressData) {
        return res.status(500).json(
            new ApiResponse(
                500,
                null,
                'Something went wrong'
            )
        )
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            randomAddressData,
            'Successfully fetched random address'
        )
    )



}

export {
    RandomAddressGanarator
}