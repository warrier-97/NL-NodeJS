/**
 * We can generate and use a self-signed certificate
 * openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -nodes
 */
const https = require( 'https' );
const fs = require( 'fs' );

const server = https.createServer({
    key: fs.readFileSync( 'key.pem' ),
    cert: fs.readFileSync( 'cert.pem' )
});

server.on( 'request', ( req, res ) => {
    // use writeHead() to add HTTP headers to the response
    res.writeHead( 200, {
        'content-type': 'text/plain'
    });
    
    res.end( 'hello, world\n', 'utf8' );
});

const port = process.env.PORT || 8443;

// start the server on desired port
server.listen(port, () => {
    console.log( `listening on port ${port}` );
});