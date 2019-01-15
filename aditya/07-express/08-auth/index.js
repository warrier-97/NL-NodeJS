const express = require('express')
const session = require('express-sessions')
const app = express();

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('login')
})

app.listen(process.PORT_ENV || 9000,function(error){
    if(error){
        console.log('Error in launching the site')
    }
})