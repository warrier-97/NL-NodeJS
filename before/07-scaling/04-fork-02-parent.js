/**
 * One network request which takes a long time to process (huge number passed in below case) will NOT block a subsequent network request (since a separate process does the long running computation now)
 * 
 * How to execute:
 * Make simultaneous HTTP requests or use curl ```curl localhost:3000/?number=10000000000```, ```curl localhost:3000/?number=1000000000``` etc.
 * 
 * Instructions:
 * 1. Move the sum method to a separate script file, say 04-fork-02-child.js
 * 2. In the script (which will be run in a forked child), listen for message from parent. On 'message' event, read a number property of message and call sum.
 * 3. Send message to parent. Pass sum as payload.
 * 4. When server receives a request, fork a child to execute the script written above.
 * 5. Next, extract and send as message, the number passed in query string to the child.
 * 6. Listen for the result message from child and send HTTP response with the result.
 */
const http = require( 'http' );
const url = require( 'url' );

let server = http.createServer( ( req, res ) => {

});

let port = process.env.port || 3000;
server.listen( port, ( err ) => {
    if( err ) throw err;
    console.log( 'server started on port ' + port );
});