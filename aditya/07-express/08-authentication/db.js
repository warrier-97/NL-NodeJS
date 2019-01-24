const express = require('express')
const mongoose = require('mongoose')
mongoose.connect( 'mongodb://localhost:27017/auth' );
mongoose.connection.on( 'connected', function() {
    console.log( 'connected to mongo' )
})

const userSchema = new mongoose.Schema({
    username : {
        type:String,
        required:true
    },
    password : {
        type:String,
        required:true
    }
},{collection : 'mycol'})

mongoose.model('User',userSchema)