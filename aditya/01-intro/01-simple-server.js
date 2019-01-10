const http = require('http')
const products = require('./data/products')
const reviews = require('./data/reviews')

const server = http.createServer(function(req,res){

    if(req.url === `/products`){
        res.end(JSON.stringify(products))
    }
    else if(req.url === `/reviews`)
    {
        res.end(JSON.stringify(reviews))
    }
});

server.listen(8081,function(error){
    if(error){
        console.log('Server could not start',error.message)
    }
});