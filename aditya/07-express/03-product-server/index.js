const express = require("express")
const app = express()
//middleware functions
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

app.listen(8082,function(error){
    if(error){
        console.log("Error in starting")
        return
    }
    console.log("Check http://localhost:8082/")
})

