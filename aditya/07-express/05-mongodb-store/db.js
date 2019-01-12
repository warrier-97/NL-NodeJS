const mongoose = require('mongoose')
const data = require('./data/seed.json')
require('./model/product')
const Product = mongoose.model('Product')

mongoose.connect('mongodb://localhost:27017/store')
mongoose.connection.on('connected',function(){
    console.log('Connected to the DB')
    loadData();
})
mongoose.connection.on('error',function(error){
    console.log('error connect to DB')
})

function loadData(){
    data.products.forEach(function(product){
        let productObj = new Product(product)
        productObj.save(function(error,savedProduct){
            if(error){
                console.error("Error occured during insertion of product "+ product.name);
                return;
            }
            console.log('Product with name = '+savedProduct.name+' saved at id = '+savedProduct._id)

        })
    })
}