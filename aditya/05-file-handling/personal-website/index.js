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
const url = require('url')
const server = http.createServer()
function requestHandler(req,res){
    res.setHeader('Content-Type','text/html')
    const urlParts = url.parse(req.url,true)
    console.log(urlParts)
    switch(urlParts.pathname){ //can be replaced by urlParts.pathname 
        case '/':
            fs.readFile('./index.html',"utf8",function(error,data){
                if(error){
                    res.statusCode = 404;
                    console.log('Error ' + error.message)
                    return;
                }
                res.end(data)
            })
            break;
        case '/contact':
            res.statusCode = 301;
            res.setHeader("Location","/contacts")
            res.end()
        case '/contacts':
            fs.readFile('./contact.html',"utf8",function(error,data){
            if(error){
                console.log('Error ' + error.message)
                return;
            }
            res.end(data)
            })
            break;
        case '/getcontacts':
        if(urlParts.query.number === undefined){
            res.statusCode = 400
            res.end()
        }
            fs.readdir("./contacts",function(err,items){
                // for(let i=0;i<items.length;i++){
                //     console.log(items[i])
                //     fs.readFile("./contacts/"+items[i],"utf8",function(err,data){
                //         var arr = data.split("|")
                //         var arr2 = new Array()
                //         for(let j = 0;j<arr.length;j++){
                //             arr2.push(arr[i].split(":"))
                //         }
                //         console.log(arr)
                //         console.log(arr2)
                //     })
                // }
                if(err){
                    res.end("error occured while reading files")
                    return;
                }
                res.end(JSON.stringify(items.slice(0,parseInt(urlParts.query.number))))
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

                    fs.writeFile( `./contacts/${contact.email}.txt`, `Name: ${contact.name} | Email: ${contact.email}`, 'utf8', function( error ) {
                        if( error ) {
                            res.end( 'Sorry, I was unable to save your contact information. Try again.' );
                            return;
                        } else {
                            res.end( `Hi ${contact.name}, I will reach out to you on ${contact.email}` );
                            return;
                        }
                    });
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