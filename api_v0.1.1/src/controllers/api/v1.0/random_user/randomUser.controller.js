import { data, RandomCountrySelector } from "../../../../lib/func/randomContrySelector.js"
import { asyncHandler } from "../../../../utils/asyncHandler.js"
import address from "../../../../lib/func/addressByContryCode.js"
import Random from "../../../../lib/func/Random.js"
import { ApiError } from "../../../../utils/responce/api/error.api.js"
import { ApiResponse } from "../../../../utils/responce/api/responce.api.js"



const RandomUser = asyncHandler(async (req, res) => {

    const contryData = await data()

    if (!contryData) {
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
    const gender = Random.FromAnArray(['male', 'female'])
    const userAddress = await address(RandomCountrySelector)
    let userFullName
    if (gender === 'male') {
        let first_name = Random.FromAnArray(contryData?.maleFirst)
        let middle_name = Random.FromAnArray(contryData?.maleFirst)
        let last_name = Random.FromAnArray(contryData?.lastName)
        userFullName = {
            first_name: first_name,
            middle_name: middle_name,
            last_name: last_name,
            full_name: `${first_name} ${middle_name} ${last_name}`
        }

    } else {
        let first_name = Random.FromAnArray(contryData?.femaleFirst)
        let middle_name = Random.FromAnArray(contryData?.maleFirst)
        let last_name = Random.FromAnArray(contryData?.lastName)
        userFullName = {
            first_name: first_name,
            middle_name: middle_name,
            last_name: last_name,
            full_name: `${first_name} ${middle_name} ${last_name}`
        }
    }
    const user = {
        name: userFullName,
        gender: gender,
        address: userAddress,
        contact: {
            number: {
                mob: '+' + Random.MinToMax(1 ,99) + ' ' + Random.MinToMax(1000000000, 9999999999),
                home:  Random.MinToMax(1000, 9999 ) + ' ' + Random.MinToMax(1000, 9999 ) + ' ' + Random.MinToMax(1000, 9999 ),
                work: String    (Random.MinToMax(1000000000, 9999999999)),
            },

        }
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            user,
            'Successfully fetched user info'
        )
    )
})

export default RandomUser