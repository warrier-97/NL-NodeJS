const express = require('express')
const router = express.Router()
const data = require('../data/seed.json')

router.get('/',function(req,res){
    res.status(200).json(data.products)
})

router.get('/:productId',function(req,res){
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

router.get('/:productId/reviews',function(req,res){
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

router.post('/',function(req,res){
    const product = req.body;
    if(!product){ // false,missing/empty
        res.status().json({'message':'No data sent'})
        return;
    }

    if(!product.name || !product.price || !product.code){
        res.json({"message":"Product name,price or code is missing/empty"})
    }

    if(!product.releaseDate){
        product.releaseDate = (new Date()).toString();
    }
    product.id = data.products.length+1;
    data.products.push(product)
    res.status(201).json(product)
})

router.put('/:productId',function(req,res){
    const productId = parseInt(req.params.productId)
    if(isNaN(productId)){
        res.status(400).send("Invalid Product Id sent")
    }
    const product = req.body
    if(!product){ // false,missing/empty
        res.status().json({'message':'No data sent'})
        return;
    }
    const matchingProduct = data.products.find(function(prod,index){
        if(prod.id === productId){
            matchingIndex = index
        }
        return prod.id === productId
    })
    data.products[matchingIndex] = {
        ...matchingProduct , ...product
    }
    res.status(200).json(data.products)
})

module.exports = router;