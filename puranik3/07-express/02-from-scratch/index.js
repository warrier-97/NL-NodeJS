const express = require( 'express' );

/* App is an Express Application object - also a web server */
const app = express();

// Handle GET /
app.get( '/', function( req, res ) {
    res.end( 'Hello world' );
});

app.listen( 8080, function( error ) {
    if( error ) {
        console.log( 'Problem starting the server : ', error.message )
        return;
    }

    console.log( 'Catch the action on http://localhost:8080/' );
});