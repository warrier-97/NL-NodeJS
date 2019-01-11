const express = require("express")
const app = express()

app.listen(8082,function(error){
    if(error){
        console.log("Error in starting")
        return
    }
    console.log("Check http://localhost:8082/")
})

const indexRouter = require('./routers/index')
app.use(indexRouter)
const productRouter = require('./routers/products')
app.use(productRouter)
const reviewRouter = require('./routers/review')
app.use(reviewRouter)