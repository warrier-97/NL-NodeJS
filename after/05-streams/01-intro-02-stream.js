/**
 * This example serves big-file.txt using streams.
 * 
 * Before running this demo, run 01-intro-00-create-file.js to create big-file.txt
 * 
 * After starting the server check the memory usage for the node proces when HTTP request is made using Task Manager (Windows)/Activity Monitor (Mac) etc. Since file data is streamed, the entire file will not be fetched in memory and memory usage will NOT shoot up. There is practically no limit on the size of the file served.
 */
const fs = require( 'fs' );
const server = require( 'http' ).createServer();

server.on('request', ( req, res ) => {
    let file = fs.createReadStream( './big-file.txt' );
    file.pipe( res );
});

server.listen( 3000, err => {
    console.log( 'server is running on port 3000' );
});