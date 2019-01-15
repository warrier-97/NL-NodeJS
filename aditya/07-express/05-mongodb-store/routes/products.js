const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const data = require('../data/seed.json')
const Product = mongoose.model('Product')
const Review = mongoose.model('Review')

router.get('/',function(req,res){
    Product.find(function(error,products){
        if(error){
            res.json({
                message:'Error retreiving files from DB'
            })
            return;
        }
        res.status(200).json(products)
    })
    
})

router.get('/:productId',function(req,res){
    const productId = req.params.productId;
    Product
        .find({_id : productId})
        .exec(function(err,product){
        
        if(err){
            res.json({
                message:'Error fetching data from DB' + err.message
            })
            return;
        }
        res.status(200).json(product)
    })
})

// router.get('/:productId',function(req,res){
//     const productId = parseInt(req.params.productId)
//     if(isNaN(productId)){
//         res.status(400).send("Invalid Product Id sent")
//     }
//     else{
//         var prod = data.products.find(function(product){
//             return product.id === productId;
//         })

//         if(prod !== undefined){
//             res.status(200).json(prod)
//         }
//         else{
//             res.status(404).json({"message" : "No product with matching id"})
//         }
        
//     }

// })

// router.get('/:productId/reviews',function(req,res){
//     const productId = parseInt(req.params.productId)
//     if(isNaN(productId)){
//         res.status(400).json({message:"Invalid Product Id sent"})
//     }
//     else{
//         const rev = data.reviews.filter(function(review){
//             return review.productId === productId
//         })
//         if(rev.length !== 0){
//             res.status(200).json(rev)
//         }
//         else{
//             res.status(404).json({message : "Product Not Found"})
//         }
//     }
// })

router.post('/',function(req,res){
    const product = req.body;
    if(!product){ // false,missing/empty
        res.status().json({'message':'No data sent'})
        return;
    }

    //Done by mongo validation 
    // if(!product.name || !product.price || !product.code){
    //     res.json({"message":"Product name,price or code is missing/empty"})
    // }

    // if(!product.releaseDate){
    //     product.releaseDate = (new Date()).toString();
    // }
    // product.id = data.products.length+1;
   
    let productObj = new Product(product)
    productObj.save(function(error,savedProduct){
        if(error){
            res.json({message:"Error occured during insertion of product "+ product.name});
            return;
        }
        console.log('Product with name = '+savedProduct.name+' saved at id = '+savedProduct._id)
        res.status(201).json(product)
        })
})

router.put('/:productId',function(req,res){
    const productId = req.params.productId;
    const body = req.body;
    if(!productId){
        res.status(400).json({message:"Invalid Product Id sent"})
    }
    if(!body){
        res.status(400).json(
            {
                message : 'No product details sent'
            }
        )
    }
    Product.findByIdAndUpdate(productId,body,{new:true},function(err,doc){
        if(err){
            res.status(400).json({message:'Bad request'})
        }
        res.status(200).json(doc)
    })
})
router.delete('/:productId',function(req,res){
    const productId = req.params.productId;
    Product.findByIdAndDelete(productId,function(error,doc){
        if(error){
            res.status(400).json({message:'Bad request'})
        }
        res.status(200).json({message : 'Deleted the document : '+JSON.stringify(doc)})
    })
})

router.get('/:productId/reviews',function(req,res){
    const productId = req.params.productId;
    Review
        .find({productId:productId})
        .exec(function(error,review){
            if(error){
                res.json({
                    message:'Error retreiving reviews from DB'
                })
                return;
            }
            res.status(200).json(review)
        })
    
})
// router.put('/:productId',function(req,res){
//     const productId = parseInt(req.params.productId)
//     if(isNaN(productId)){
//         res.status(400).send("Invalid Product Id sent")
//     }
//     const product = req.body
//     if(!product){ // false,missing/empty
//         res.status().json({'message':'No data sent'})
//         return;
//     }
//     const matchingProduct = data.products.find(function(prod,index){
//         if(prod.id === productId){
//             matchingIndex = index
//         }
//         return prod.id === productId
//     })
//     data.products[matchingIndex] = {
//         ...matchingProduct , ...product
//     }
//     res.status(200).json(data.products)
// })

module.exports = router;