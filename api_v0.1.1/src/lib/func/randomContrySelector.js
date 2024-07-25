import Random from "./Random.js"
const country = [
    'US'
]

const RandomCountrySelector = Random.FromAnArray(country)


// Function to dynamically import the module
const loadModule = async () => {
    try {
        const modulePath = `../data/api/v1.0/random_user/country/${RandomCountrySelector}/index.js`;
        const data = await import(modulePath);
        return data;
    } catch (error) {
        console.error('Error loading module:', error);
        return null
    }
};
const data = await loadModule()

export {
    data,
    RandomCountrySelector
}