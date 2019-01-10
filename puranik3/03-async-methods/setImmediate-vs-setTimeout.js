const http = require( 'http' );

const server = http.createServer(function( req, res ) {
    setTimeout(function() {
        console.log( 'setTimeout' )
    }, 0);

    setTimeout(function() {
        console.log( 'setTimeout' )
    }, 0);

    setTimeout(function() {
        console.log( 'setTimeout' )
    }, 0);

    setImmediate(function() {
        console.log( 'setImmediate' )
    });

    setImmediate(function() {
        console.log( 'setImmediate' )
    });

    setImmediate(function() {
        console.log( 'setImmediate' )
    });
    
    res.end( 'hello' );
});

server.listen( 8080 );