import { v2 as cloudinary } from 'cloudinary'  

cloudinary.config({
    cloud_name: "dbydhajl7",
    api_key: "589144768891696",
    api_secret: "YEs-LL4bD2Vmc9_bCeE60AAFmKQ"
})

export const uploadImage = async filePath => {
    return await cloudinary.uploader.upload(filePath,{
        folder: 'posts'
    })
    
}

export const deleteImage = async id => {
    return await cloudinary.uploader.destroy(id)
}