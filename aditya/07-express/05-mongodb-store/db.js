const mongoose = require('mongoose')
const data = require('./data/seed.json')
require('./model/product')
require('./model/review')
const Product = mongoose.model('Product')
const Review = mongoose.model('Review')

mongoose.connect('mongodb://localhost:27017/store')
mongoose.connection.on('connected',function(){
    console.log('Connected to the DB')
    loadData();
})
mongoose.connection.on('error',function(error){
    console.log('error connect to DB')
})

function loadData(){
    productIdArray = new Array()
    counter = 0;
    data.products.forEach(function(product){
        let productObj = new Product(product)
        productObj.save(function(error,savedProduct){
            productIdArray.push(savedProduct._id)
            if(error){
                console.error("Error occured during insertion of product "+ product.name);
                return;
            }
            console.log('Product with name = '+savedProduct.name+' saved at id = '+savedProduct._id)
            counter++;
            if(counter == data.products.length){
                loadReviews()
            }
        })
    })
    function loadReviews(){
        data.reviews.forEach(function(review){
            let reviewObj = new Review(review)
            reviewObj.productId = new mongoose.Types.ObjectId(productIdArray[review.productId-1])
            reviewObj.save(function(error,savedReview){
                if(error){
                    console.error("Error occured during insertion of Review "+ review.title);
                    return;
                }
                console.log('Review with name = '+savedReview.title+' saved at id = '+savedReview._id)
            })
        })
    }
}