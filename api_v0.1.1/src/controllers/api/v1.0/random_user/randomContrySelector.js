import Random from "../../../../lib/func/Random.js"




const country = [
    'US' 
]

const RandomCountrySelector = Random.FromAnArray(country)


// Function to dynamically import the module
const loadModule = async (countryCode) => {
    try {
        const modulePath = `../../../../lib/data/api/v1.0/random_user/country/${countryCode}/index.js`;
        const data = await import(modulePath);
        return data; // or just 'return data' if you want the entire module object
    } catch (error) {
        console.error('Error loading module:', error);
        return null
    }
};

export default  await loadModule(RandomCountrySelector)