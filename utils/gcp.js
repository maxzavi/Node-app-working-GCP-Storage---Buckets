const  { Storage } = require ('@google-cloud/storage')

require('dotenv').config()

const storage = new Storage({
    keyFilename: process.env.GCP_PATH_KEY,
})

const bucketName = process.env.GCP_BUCKET_NAME
const bucket = storage.bucket(bucketName)

const asyncListFiles = async ()=>{
    const files = await bucket.getFiles()
    const result = files[0].map (file=>{
        return {name:file.name}
    })
    return result;
}

const asyncUploadFile = async(pathfile,filename)=>{
    await bucket.upload(pathfile + "/" + filename,{destination: filename})
}

const asyncGetFile = async (id) =>{
    return process.env.GCP_URI + id;
}


module.exports={
    asyncListFiles,
    asyncUploadFile,
    asyncGetFile
}