import data from "./randomContrySelector.js";


const RandomUserGanarator = async (req, res) => {
   await data .then(data => console.log(data.firstName))
    return res.status(200).json(
        await data .then(data => data)

    )

}


export default RandomUserGanarator