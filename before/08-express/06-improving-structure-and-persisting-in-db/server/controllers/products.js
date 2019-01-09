/**
 * For simpler ways to make HTTP requests and use the response check https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html
 */
const http = require( 'http' );
const httpStatus = require( 'http-status' );
const utils = require( '../../utils/utils' );
const config = require( '../../config.json' );

function renderProducts( req, res, next ) {
    let request = http.request({
        method: 'GET',
        hostname: config.api.baseUrl,
        port: config.api.port,
        path: config.api.prefix + '/products',
    });

    request.once( 'response', ( response ) => {
        let data = '';
 
        response.on('data', (chunk) => {
          data += chunk;
        });
       
        response.on('end', () => {
            let products = JSON.parse( data );
            res.render( 'products', {
                products: products,
                title: 'Product Catalog'
            });    
        });
    });
    
    request.on( 'error', ( err ) => {
        utils.sendJsonErrorResponse( req, res, httpStatus.INTERNAL_SERVER_ERROR, err.message );  
    });

    request.end();
}

function renderProduct( req, res, next ) {
    const id = req.params.id;
    
    if( !id ) {
        next();
    }

    let request = http.request({
        method: 'GET',
        hostname: config.api.baseUrl,
        port: config.api.port,
        path: config.api.prefix + '/products/' + id,
    });

    request.once( 'response', ( response ) => {
        let data = '';
 
        response.on('data', (chunk) => {
          data += chunk;
        });
       
        response.on('end', () => {
            let product = JSON.parse( data );
            res.render( 'product', {
                product: product,
                title: product.name
            });    
        });
    });
    
    request.on( 'error', ( err ) => {
        utils.sendJsonErrorResponse( req, res, httpStatus.INTERNAL_SERVER_ERROR, err.message );  
    });

    request.end();
}

module.exports = {
    renderProduct,
    renderProducts
};