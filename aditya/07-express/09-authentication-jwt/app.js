const express = require('express');
const app = express();
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const jwt = require('jsonwebtoken');
require('./db')
const User = mongoose.model('User')
const path = require('path');



app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))


app.get('/',function(req,res){
    res.render('login',{errorLogin : false});
})

app.post('/login',function(req,res){
    if(req.body && req.body.username && req.body.password){
        User.find({username : req.body.username},function(err,doc){
            if(err){
                res.status(400);
                res.redirect('/');
                return;
            }
            doc.forEach(function(item){
                console.log(item);
                if(item.username === req.body.username && item.password === req.body.password){
                    const claims = {
                        username : item.username,
                        isAdmin : Boolean(item.isAdmin)
                    }
                    console.log("*** doc = ",doc);
                    console.log("*** claims = ",claims)
                    jwt.sign(claims,'mysecret',{expiresIn: 24*60*60},function(error,token){
                        if(error){
                            res.status(403).json({
                                message : "You are not authorized"+error.message
                            })
                            return;
                        }
                        res.status(200).json({
                            message : "You have logged in",
                            token : token //must be explicitly sent by developers
                        })    
                    })
                }
                else{
                    res.status(403).redirect('/')
                }
            })
        })

    }
})

app.get('/private',function(req,res){
    const authorizationHeader = req.get('Authorizarion') || req.get('authorization');
    const token = authorizationHeader.split(' ')[1];
    jwt.verify(token,'mysecret',function(error,claims){
        if(error){
            res.json({
                message : 'Token incorrect'
            })
        }
        res.render('private')
    })
})

app.listen(3001,function(error){
    if(error){
        console.log('Error starting the server');
    }
    console.log('Server started on port 3001');
})
