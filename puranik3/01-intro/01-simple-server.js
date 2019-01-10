const http = require( 'http' );
const products = require( './data/products.json' );
const reviews = require( './data/reviews.json' );

// the callback function is called when the server receives an HTTP rquest
// npm install -g nodemon
const server = http.createServer(function( req, res ) {
    console.log( req.url )

    switch( req.url ) {
        case '/products':
            res.end( JSON.stringify( products ) );
            break;
        case '/reviews':
            res.end( JSON.stringify( reviews ) );
            break;
        case '/feeback':
            res.end( 'feedback will be sent' );
            break;
        default:
            res.end( 'hello world' );
    }
});

server.listen(8080, function( error ) {
    if( error ) {
        console.log( 'server could not be started | error = ' + error.message );
        return;
    }

    console.log( 'server has started - check http://localhost:8080/' );
});