const express = require('express')
const multer = require('multer')
const path = require('path')
const app =express()
app.use(express.static(path.join(__dirname,'public')))
const PORT = process.env.PORT || 3000;

//const uploads = multer({dest: './uploads'})

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,path.join(__dirname,'uploads',file.fieldname))
    },
    filename: function(req,file,cb){
        cb(null,req.body.username+"-"+file.originalname)
    }
})
function fileFilter(req,file,cb){
    const fieldname = file.fieldname;
    const extension = path.extname(file.originalname);

    if(fieldname === 'resume'){
        return cb(null,extension.toUpperCase() === '.PDF')
    }
    const allowedExtension = ['.JPG','.JPEG','.TIFF','.PNG']
    if(fieldname === 'portfolio'){
        cb(null,allowedExtension.indexOf(extension.toLocaleUpperCase())!==-1)
    }
}
const uploads = multer({
    storage:storage,
    fileFilter:fileFilter
})
const uploadHandler = uploads.fields(
    [
        {name:'resume',maxCount:1},
        {name:'portfolio',maxCount:3}
    ]
)

app.post('/portfolio',uploadHandler,function(req,res){
    res.status(200).json({
        message : 'Uploaded successfully'
    })
})



app.listen(PORT,function(err){
    if(err){
        console.log(err.message)
    }
    console.log('Server started! Check on http://localhost:'+PORT)
})