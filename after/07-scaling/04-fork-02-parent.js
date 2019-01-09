/**
 * One network request which takes a long time to process (huge number passed in below case) will NOT block a subsequent network request (since a separate process does the long running computation now)
 * 
 * How to execute:
 * Make simultaneous HTTP requests or use curl ```curl localhost:3000/?number=10000000000```, ```curl localhost:3000/?number=1000000000``` etc.
 */
const { fork } = require( 'child_process' );
const http = require( 'http' );
const url = require( 'url' );

let server = http.createServer( ( req, res ) => {
    let number = +url.parse( req.url, true ).query.number;
    
    const child = fork( './04-fork-02-child.js' );

    child.once( 'message', msg => {
        res.end( msg.sum.toString() );
    });

    child.send({
        number: number
    });
});

let port = process.env.port || 3000;
server.listen( port, ( err ) => {
    if( err ) throw err;
    console.log( 'server started on port ' + port );
}); 
