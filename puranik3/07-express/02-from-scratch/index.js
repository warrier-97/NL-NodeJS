const express = require( 'express' );
const contacts = require( './contacts.json' );

console.log( __filename, __dirname );

/* App is an Express Application object - also a web server */
const app = express();

// Handle GET /
app.get( '/', function( req, res ) {
    res.end( 'Hello world' );
});

// Handle GET /contacts and return contents of contact.json file
app.get( '/contacts', function( req, res ) {
    // res.sendFile( __dirname + '/contacts.json' );
    res.json( contacts );
});

app.listen( 8080, function( error ) {
    if( error ) {
        console.log( 'Problem starting the server : ', error.message )
        return;
    }

    console.log( 'Catch the action on http://localhost:8080/' );
});