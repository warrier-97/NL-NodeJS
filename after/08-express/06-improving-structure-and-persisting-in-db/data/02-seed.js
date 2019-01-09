const http = require( 'http' );
const utils = require( '../utils/utils' );
const config = require( '../config.json' );
const products = require( './seed.json' ).products;

(function seedProducts() {
    let request = http.request({
        method: 'POST',
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
            console.log( 'Products seed data added' );
        });
    });
    
    request.on( 'error', ( err ) => {
        console.log( 'Some problem occured when trying to add Products seed data' );  
    });

    request.setHeader('Content-Type', 'application/json');
    request.write( JSON.stringify( products ) );
    request.end();
}());