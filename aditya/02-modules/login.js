const anyBody = require('body/any')
const http = require('http')

const server = http.createServer(function (req,res){
    anyBody(req,res,{},function(err,body){
        console.log(body);
        if(err){
            res.end("Some error occured")
        }
        if(body.username === 'abc@xyz.com' && body.password === 'abcdefg')
        {
            res.end(`Hello ${body.username} ! You are Logged In!`)
        }
        else if( body.username === undefined || body.password === undefined){
            res.end("Username or Password is missing")
        }
        else{
            res.end("Incorrect")
        }
    })
})

server.listen(8081)