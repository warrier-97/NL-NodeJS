/**
 * This example does not serve big-file.txt using streams.
 * 
 * Before running this demo, run 01-intro-00-create-file.js to create big-file.txt
 * 
 * After starting the server check the memory usage for the node proces when HTTP request is made using Task Manager (Windows)/Activity Monitor (Mac) etc. Since there is no streaming, the entire file will be fetched in memory and memory usage will shoot up. For a much larger file, this approach will throw an error (default buffer limit in Node is about 2GB)
 */
const fs = require( 'fs' );
const server = require( 'http' ).createServer();

server.on('request', ( req, res ) => {
    fs.readFile( './big-file.txt' , ( err, data ) => {
        if( err ) throw err;

        res.end( data );
    });
});

server.listen( 3000, err => {
    console.log( 'server is running on port 3000' );
});