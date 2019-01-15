const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const data = require('../data/seed.json')
const Review = mongoose.model('Review')

router.get('/',function(req,res){
    Review.find(function(error,reviews){
        if(error){
            res.json({
                message:'Error retreiving files from DB'
            })
            return;
        }
        res.status(200).json(reviews)
        
    })
})
router.get('/:productId',function(req,res){
    const productId = req.params.productId;
    Review
    .find({productId:productId},function(error,review){
        if(error){
            res.status(400).json({message : 'Bad request'})
            return;
        }
        res.json(review)
    })
    .limit(1)
})

module.exports = router;