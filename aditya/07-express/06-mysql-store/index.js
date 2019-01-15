
var express = require('express');
var path = require('path');
require('./db')


var indexRouter = require('./routes/index');
var productRouter = require('./routes/products')
// var reviewRouter = require('./routes/review')

var app = express();

app.use('/', indexRouter);
app.use('/products',productRouter)


app.listen(3000,function(error){
  if(error){
    console.log("Error");
  }
})
module.exports = app;
