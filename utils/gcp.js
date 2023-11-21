const  { Storage } = require ('@google-cloud/storage')

const config = require('../utils/config')

const storage = new Storage({
    keyFilename: config.GCP_PATH_KEY,
})

const bucket = storage.bucket(config.GCP_BUCKET_NAME)

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
    return config.GCP_URI + id;
}

module.exports={
    asyncListFiles,
    asyncUploadFile,
    asyncGetFile
}