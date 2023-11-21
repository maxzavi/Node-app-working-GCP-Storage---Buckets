const express = require('express')
const bodyParser = require('body-parser');

const {asyncListFiles, asyncUploadFile, asyncGetFile} = require('./utils/gcp')
const app = express();
const port = process.env.port || 3000;

app.use(bodyParser.json());


//List bucket files
app.get('/',async(req,res)=>{
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    const result = await asyncListFiles(fullUrl)
    res.json(result)
})

//Upload file
app.post('/',async(req,res)=>{
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    const {pathfile, filename} = req.body
    await asyncUploadFile(pathfile, filename)
    res.send({path:fullUrl+filename})
})

//Get File
app.get('/:id',async(req,res)=>{
    const {id} = req.params
    const result = await asyncGetFile(id)
    res.redirect(result)
})

app.listen(port,()=>{
    console.log(`Listening in port: ${port}`);
    
});