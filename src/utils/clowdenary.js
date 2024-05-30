import { v2 as cloudinary } from 'cloudinary';
import  fs  from 'fs';


// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        // Upload file to Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        //file has been uploaded successfully
        console.log('File has been uploaded successfully', response);
        return response

    } catch (error) {

        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed

        //file has been removed successfully
        console.log('File has been removed successfully', error);
        return null

    }
}

export { uploadOnCloudinary }