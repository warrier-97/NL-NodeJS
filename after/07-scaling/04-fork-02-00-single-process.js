/**
 * One network request which takes a long time to process (huge number passed in below case) will block a subsequent network request.
 * 
 * How to execute:
 * Make simultaneous HTTP requests or use curl ```curl localhost:3000/?number=10000000000```, ```curl localhost:3000/?number=1000000000``` etc.
 */
const http = require( 'http' );
const url = require( 'url' );

// potentially long computation
function sum( number ) {
    for( var i = 1, sum = 0; i <= number; i++ ) {
        sum += i;
    }
    console.log( `sum is ${sum}` );
    return sum;
}

let server = http.createServer( ( req, res ) => {
    let number = +url.parse( req.url, true ).query.number;
    res.end( sum( number ).toString() );
});

let port = process.env.port || 3000;
server.listen( port, ( err ) => {
    if( err ) throw err;
    console.log( 'server started on port ' + port );
}); 
