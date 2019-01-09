const express = require( 'express' );
const path = require( 'path' );

// this is our in-memory list of products
const data = require( '../data/seed.json' );

const router = express.Router();

// counter to create unique id for a product
let counter = 101;

router.get( '/', ( req, res ) => {
    if( req.query && req.query.format && req.query.format === 'json' ) {
        return res.json( data.products );
    }

    res.render( 'products', {
        data: data,
        title: 'Product Catalog'
    });
});

router.post( '/', ( req, res ) => {
    if( req.body && req.body.name ) {
        req.body.id = counter++;
        data.products.push( req.body );
        // Tip: Use 201 (Created) for POST requests that create a new resource
        res.status(201).json( req.body );
    } else {
        // Tip: Use 403 (Bad Request) for a mal-formed request
        res.status(403).json({
            message: 'Product details must be passed as a JSON in request body'
        });
    }
});

// Exercise: Add middleware functions to process PUT (update product) and DELETE (remove product). Use 

router.get( '/:id', ( req, res, next ) => {
    const id = parseInt( req.params.id );
    
    if( isNaN( id ) ) {
        next();
    }
    
    const product = data.products.find( ( product ) => product.id === id );

    if( product ) {
        res.render( 'product', {
            product: product,
            title: product.name
        });
    } else {
        res.status(404).json({
            message: 'Product with given id not found'
        });
    }
});

module.exports = router;