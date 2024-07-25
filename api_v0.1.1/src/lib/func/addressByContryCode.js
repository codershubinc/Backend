import Random from "./Random.js"
import  data from './contryByInfoContryCode.js'



const randomAddress = async (contryCode) => {
    let addressData = await data(contryCode)
    // console.log('addressData', addressData);
    

    return {
        city: Random.FromAnArray(addressData?.citys),
        co_ordinates: {
            latitude: Random.FromAnArray(['', "-"]) + Random.MinToMax(0, 100) + ',' + Random.MinToMax(1000, 10000),
            longitude: Random.FromAnArray(['', "-"]) + Random.MinToMax(0, 100) + ',' + Random.MinToMax(1000, 10000),
        },
        state: Random.FromAnArray(addressData?.states),
        post_code: Random.MinToMax(100000, 999999),
        time_zone: {},
        street: {
            name: Random.FromAnArray(addressData?.streets),
            number: Random.MinToMax(1, 1000),
        },
        country : contryCode
    }

}




export default randomAddress