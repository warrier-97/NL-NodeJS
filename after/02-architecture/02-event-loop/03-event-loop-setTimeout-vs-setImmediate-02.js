// the results in this case are always same - setImmediate log followed by the setTimeout one
const fs = require( 'fs' );

//  setImmediate() will always be executed before any timers if scheduled within an I/O cycle
fs.readFile( __dirname + '/reference.md', function( err, buffer ) {
    // console.log( buffer.toString() ); // uncomment to see the file contents output
    
    setTimeout(function() {
        console.log( '1b [setTimeout]' );
    }, 0);

    setImmediate(function() {
        console.log( '2b [setImmediate]' );
    });
});