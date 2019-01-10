const anyBody = require('body/any')
const http = require('http')
const dt = require("./data/email.json")

const server = http.createServer(function (req,res){
    anyBody(req,res,{},function(err,body){
        res.setHeader('Content-Type','text/html')
        res.setHeader('Set-Cookie',Math.random())
        console.log(body);
        if(err){
            res.end("Some error occured")
        }
        for(let i=0;i<dt.length;i++)
        {
            if(body.username === dt[i].username && body.password === dt[i].password)
            {
                var flag = 1;
            }
        }
        
        if( body.username === undefined || body.password === undefined){
            res.end("Username or Password is missing")
        }
        else if(flag === 1){
            res.end(`Hello ${body.username} ! You are Logged In!`)
        }
        else{
            res.end("Incorrect")
        }
    })
})

server.listen(8081)