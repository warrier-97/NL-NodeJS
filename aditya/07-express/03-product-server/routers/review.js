const express = require('express')
const router = express.Router()
const data = require('../data/seed.json')

router.get('/review/:productId',function(req,res){
    const productId = parseInt(req.params.productId)
    if(isNaN(productId)){
        res.status(400).json({message:"Invalid Product Id"})
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