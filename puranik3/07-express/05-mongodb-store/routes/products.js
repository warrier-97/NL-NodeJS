const express = require( 'express' );
const mongoose = require( 'mongoose' );

const Product = mongoose.model( 'Product' );

const router = express.Router();

router.get( '/', function( req, res ) {
    Product.find(function( error, products ) {
        if( error ) {
            res.json({
                message: 'Error retrieving products from DB'
            });
            return;
        }

        res.status(200).json( products );
    });
});

router.post( '/', function( req, res ) {
    const product = req.body;

    if( !req.body ) { // false, undefined, null, '',
        res.json({
            message: 'No product details - request body is empty'
        });
        return;
    }

    // add the product (DB query)
    let productObj = new Product( product );
    productObj.save(function( error, savedProduct ) {
        if( error ) {
            res.json({
                message: 'Some error occured saving product'
            });
            return;
        }
        res.status( 201 ).json( savedProduct );
    });
});


// router.put( '/:productId', function( req, res ) {
//     const productId = parseInt( req.params.productId );

//     if( isNaN( productId ) ) {
//         res.status( 400 ).json({
//             message: 'Product id is not a number'
//         });
//         return;
//     }

//     const product = req.body;
//     if( !product ) {
//         res.json({
//             message: 'No product details - request body is empty'
//         });
//         return;
//     }

//     let matchingIndex;
//     const matchingProduct = data.products.find(function( product, index ) {
//         if( product.id === productId ) {
//             matchingIndex = index;
//         }
//         return product.id === productId;
//     });

//     data.products[matchingIndex] = { ...matchingProduct, ...product };
//     res.json( data.products );
// });

// router.get( '/:productId', function( req, res ) {
//     const productId = parseInt( req.params.productId );

//     if( isNaN( productId ) ) {
//         res.status( 400 ).json({
//             message: 'Product id is not a number'
//         });
//         return;
//     } else {
//         const product = data.products.find(function( product ) {
//             return product.id === productId;
//         });

//         if( product !== undefined ) {
//             res.json( product );
//         } else {
//             res.status( 404 ).json({
//                 message: 'No product found with id ' + productId
//             });
//         }
//     }
// });

// router.get( '/:productId/reviews', function( req, res ) {
//     const productId = parseInt( req.params.productId );

//     if( isNaN( productId ) ) {
//         res.status( 400 ).json({
//             message: 'Product id is not a number'
//         });
//         return;
//     } else {
//         const reviews = data.reviews.filter(function( review ) {
//             return review.productId === productId
//         });
//         res.json( reviews );
//     }
// });

module.exports = router;