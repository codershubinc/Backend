import data from "./randomContrySelector.js";


const RandomUserGanarator = async (req, res) => {
   const randomUser =  await data
   if (!randomUser) {
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
    return res.status(200).json(
        await data.then(data => data)

    )

}


export default RandomUserGanarator