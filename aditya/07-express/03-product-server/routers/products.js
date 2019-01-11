const express = require('express')
const router = express.Router()
const data = require('../data/seed.json')

router.get('/products',function(req,res){
    res.status(200).json(data.products)
})

router.get('/products/:productId',function(req,res){
    const productId = parseInt(req.params.productId)
    if(isNaN(productId)){
        res.status(400).send("Invalid Product Id sent")
    }
    else{
        var prod = data.products.find(function(product){
            return product.id === productId;
        })

        if(prod !== undefined){
            res.status(200).json(prod)
        }
        else{
            res.status(404).json({"message" : "No product with matching id"})
        }
        
    }

})

router.get('/products/:productId/reviews',function(req,res){
    const productId = parseInt(req.params.productId)
    if(isNaN(productId)){
        res.status(400).json({message:"Invalid Product Id sent"})
    }
    else{
        const rev = data.reviews.filter(function(review){
            return review.productId === productId
        })
        if(rev.length !== 0){
            res.status(200).json(rev)
        }
        else{
            res.status(404).json({message : "Product Not Found"})
        }
    }
})

module.exports = router;