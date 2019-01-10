const anyBody = require('body/any')
const http = require('http')

const server = http.createServer(function (req,res){
    anyBody(req,res,{},function(err,body){
        console.log(body);
        res.end(`Hello ${body.name}! How is ${body.city}`)
    })
})

server.listen(8081)