// include the built-in http module
const http = require( 'http' );

// create a web server
const server = http.createServer();

// set the function to be executed when request event fires (HTTP request from client comes in) - this typically returns the HTTP response too.
server.on( 'request', ( req, res ) => {
    res.end( 'Hello, world [event emitter style handler addition]' );
});

// Use the PORT environment variable or default to 8080 (if PORT variable not found in environment)
const port = process.env.PORT || 8080;

// start the server on desired port
// Aside: server.listen() is an asynchronous function - in Node asynchronous functions are asynchronous along all possible control flow paths - so we can safely call server.on( 'listening', ... ) even after server.listen()
server.listen( port );
server.on( 'listening', () => {
    console.log( `listening on port ${port}` );
});