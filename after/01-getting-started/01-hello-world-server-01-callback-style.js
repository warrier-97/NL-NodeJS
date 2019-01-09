// include the built-in http module
const http = require( 'http' );

// create a web server - pass the function to be executed when HTTP request from client comes in - this typically returns the HTTP response too.
const server = http.createServer( ( req, res ) => {
    res.end( 'Hello, world [callback style handler addition]' );
});

// Use the PORT environment variable or default to 8080 (if PORT variable not found in environment)
const port = process.env.PORT || 8080;

// start the server on desired port
server.listen(port, () => {
    console.log( `listening on port ${port}` );
});