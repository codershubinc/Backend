
const loadModule = async (contryCode) => {
    
    console.log('R', contryCode);

    
    try {
        const modulePath = `../data/api/v1.0/country/${contryCode}/index.js`;
        const data = await import(modulePath);
        return data;
    } catch (error) {
        // console.error('Error loading module:', error);
        return null
    }
};


export  default loadModule