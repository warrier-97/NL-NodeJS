/**
 * The bower tool can be used for installing any third-party bower module. It can work with the the [official bower registry](https://bower.io/search/), or a local bower registry (say, set up by a company), or even Git project hosting solutions, eg. GitHub. By default it is configured to work with the official bower registry.
 * Bower modules include ONLY front-end libraries.
 * Install bower using ```npm install -g bower```
 * Initialize Bower for a project by executing ```bower init``` from the project root folder.
 *
 * Run this script and make an HTTP request for /index.html
 */
const http = require( 'http' );
const fs = require( 'fs' );

const server = http.createServer( ( req, res ) => {
    fs.readFile( __dirname + '/' + req.url, ( err, data ) => {
        if( err ) throw err;
    
        res.end( data.toString() );
    });
});

const port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log( `listening on port ${port}` );
});