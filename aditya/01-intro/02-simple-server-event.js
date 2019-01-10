const http = require('http')
const products = require('./data/products')
const reviews = require('./data/reviews')
const feedback = require('./data/feedback.json')

const server = http.createServer();

function requestHandler(req,res){
    console.log(req.url)
    switch(req.url){
        case '/products':
            res.end(JSON.stringify(products))
            break;
        case '/reviews':
            res.end(JSON.stringify(reviews))
            break;
        case '/feedback':
            res.end(JSON.stringify(feedback))
            break;
        default:
            res.end('nothing')
    }
}
server.on('request',requestHandler)

server.listen(8081);
function startupHandler(error){
    if(error){
        console.log('Server could not start',error.message)
    }
}
server.on('listening',startupHandler)