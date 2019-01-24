const express = require ('express');
const session = require('express-session');
const path = require('path');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session)
require('./db.js')
const User = mongoose.model('User')

const app = express();

app.use(session({
    secret : "My secret",
    store : new MongoStore({mongooseConnection:mongoose.connection})
}))
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

// var user = {
//     username : "adi@gmail.com",
//     password : "password"
// }

app.get('/',function(req,res){
    res.render('login',{errorLogin : false})
})

app.post('/login',function(req,res){
    if(req.body && req.body.username){
        User.find({username : req.body.username},function(error,doc){
            if(error){
                res.status(403).render('login',{errorLogin : true})
                return;
            }
            //console.log(doc);
            doc.forEach(function(item){
                if(item.username === req.body.username && item.password === req.body.password){
                    req.session.user = item;
                    res.json({
                        message : "You have successfully logged in"
                    })
                }
            })
        })
    }
    // if(req.body && req.body.username === user.username && req.body.password === user.password){
    //     req.session.user = user;
    //     res.json({
    //         message : "You have successfully logged in"
    //     })
    // }
    else{
        res.status(403).render('login',{errorLogin : true})
    }

})

app.get('/private',function(req,res){
    if(!req.session.user){
        res.status(400).redirect('/');
        return;
    }
    res.status(200).render('private')
})

app.post('/logout',function(req,res){
    req.session.destroy();
    res.redirect('/');
})


app.listen(3001,function(err){
    if(err){
        console.log('Error starting the server')
        return;
    }
    console.log('Server started on port 3001')
})