const express = require("express")
const app = express()
const chalk = require('chalk')
const morgan = require('morgan')
const path = require('path')
const fs =require('fs')


//middleware functions

if(process.env.NODE_ENV === 'production'){
    var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
    app.use(morgan('combined', { stream: accessLogStream }))
}

if(process.env.NODE_ENV !== 'production'){
    app.use(function(req,res,next) {
        req.receivedAt = new Date();
        next();
    })
    app.use(function(req,res,next){
        console.log(chalk.red("Request is recevied at :"+req.receivedAt));
        next();
    })
    
}



const indexRouter = require('./routers/index')
app.use(indexRouter)
const productRouter = require('./routers/products')
app.use('/products',productRouter)
app.use(productRouter)
const reviewRouter = require('./routers/review')
app.use('/reviews',reviewRouter)
app.use(reviewRouter)
app.use(express.json()) // parse Json
app.use(express.urlencoded({extended:false})) //parse from data


console.log(app.get('env')) // express framework picks up NODE_ENV
app.set('title','My Store')
app.set('','')


const port = process.env.PORT || 8082
app.listen(port,function(error){
    if(error){
        console.log("Error in starting")
        return
    }
    console.log("Site launched on port ",port)
})

