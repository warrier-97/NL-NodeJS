const http = require( 'http' );
const products = require( './data/products.json' );
const reviews = require( './data/reviews.json' );

const server = http.createServer();

function requestHandler( req, res ) {
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
}

// request event is fired on server when HTTP request comes in - requestHandler function is executed at that time
server.on( 'request', requestHandler );

function startupHandler( error ) {
    if( error ) {
        console.log( 'server could not be started | error = ' + error.message );
        return;
    }

    console.log( 'server has started - check http://localhost:8080/' );
}

server.listen( 8080 );

server.on( 'listening', startupHandler ); // listening event is fired when server is started - startupHandler will be called after that