const express = require( 'express' );
const data = require( '../data/seed.json' );

const router = express.Router();

router.get( '/products', function( req, res ) {
    res.render( 'products', {
        title: 'Store Catalog',
        products: data.products
    })
});

router.get( '/products/:productId', function( req, res ) {
    const productId = parseInt( req.params.productId );
    if( isNaN( productId ) ) {
        const error = new Error( 'Product ID not found' );
        error.status = 404;
        throw error;
    }

    const product = data.products.find(function( product ) {
        return product.id === productId;
    });

    res.render( 'product-details', {
        title: product.name,
        product: product
    });
});

module.exports = router;