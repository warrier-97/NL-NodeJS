const express = require("express")
const app =express() // Express Application object and a web server
console.log(__filename,__dirname)
app.listen(8082,function(error){
    if(error){
        console.log("Error : ",error.message)
        return;
    }
    console.log("Catch the action on http://localhost:8082/")
})



// Handle a GET request with handler
app.get('/',function(req,res){
    res.end("Hello World")
})

app.get("/contacts",function(req,res){
    res.sendFile(__dirname+"/contact.json")
})