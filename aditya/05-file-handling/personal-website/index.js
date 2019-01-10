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
const anyBody = require('body/any')
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

        case '/save':
            if(req.method.toUpperCase() !== 'POST'){
                res.end('Invalid HTTP method. Use POST /save to send data')
            }
            else{
                anyBody(req,res,{},function(error,contact){
                    if(error){
                        res.end("Sorry! Will get back Soon!")
                        return;
                    }

                    fs.writeFile(`./contacts/${contact.email.txt}`)
                    res.end(`Hey ${contact.name}! Will contact you soon on ${contact.email}`)
                })
            }
        
        default :
            fs.readFile('./page-not-found.html',"utf8",function(error,data){
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