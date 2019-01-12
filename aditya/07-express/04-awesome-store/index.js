const express = require('express')
const app = express()
const path = require('path')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')))


const indexRouter = require('./routers/index')
app.use(indexRouter)
app.set('app-desc',{
    'title':'Aswesome Store',
    'version':'1.0.1',
    'description':'This is a online store'
})


const port = process.env.PORT || 8082
app.listen(port,function(error){
    if(error){
        console.log("Error in starting")
        return
    }
    console.log("Site launched on port ",port)
})
