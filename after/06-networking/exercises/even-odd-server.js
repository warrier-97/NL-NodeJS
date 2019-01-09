const http = require( 'http' );
const url = require( 'url' );

function isEven( number ) {
    return number % 2 === 0;
}

let server = http.createServer( (req, res) => {
    res.end( isEven( +url.parse( req.url, true ).query.number ) ? 'even' : 'odd' );
    res.end();
});

let port = process.env.port || 3000;
server.listen( port, ( err ) => {
    if( err ) {
        console.log( 'error starting server' );
        return;
    }

    console.log( 'server started on port ' + port );
}); 