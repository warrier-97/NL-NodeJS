const anyBody = require( 'body/any' );
const http = require( 'http' );

const server = http.createServer(function( req, res ) {
    anyBody( req, res, {}, function( error, body ) {
        console.log( body );
        res.end( `Hello ${body.name}! How is the weather in ${body.city}` )
    });

    /**
     * Write a server thta accepts user credentials in body
     * {
     *  "username": "john.doe@example.com",
     * "password": "password"
     * }
     *
     * Respond with "You are logged in"
     * Respond with "You are not authorized"
     */
});

server.listen( 8080 );