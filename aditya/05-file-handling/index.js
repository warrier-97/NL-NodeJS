const fs = require('fs')


// fs.readFile('./index.html',"utf8",function(error, data){
//     if(error){
//         console.log(error.message)
//         return;
//     }
//     console.log('File contents = ')
//     console.log(data)
//     console.log("Second method")
//     console.log(data.toString())
// })

const http = require('http')
const server = http.createServer()
function requestHandler(req,res){
    res.setHeader('Content-Type','text/html')
    switch(req.url){
        case '/':
            fs.readFile('./index.html',"utf8",function(error,data){
                if(error){
                    console.log('Error ' + error.message)
                    return;
                }
                res.end(data)
            })
            break;
        case '/contacts':
            fs.readFile('./contact.html',"utf8",function(error,data){
            if(error){
                console.log('Error ' + error.message)
                return;
            }
            res.end(data)
            })
            break;
            
    }
}
server.on('request',requestHandler)

server.listen(8081)