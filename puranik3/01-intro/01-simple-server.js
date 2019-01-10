const http = require( 'http' );

// the callback function is called when the server receives an HTTP rquest
const server = http.createServer(function( req, res ) {
    console.log( req.url )
    res.end( 'hello world' );
});

server.listen(8080, '127.0.0.1', function( error ) {
    if( error ) {
        console.log( 'server could not be started | error = ' + error.message );
        return;
    }

    console.log( 'server has started - check http://localhost:8080/' );
});