/**
 * Instructions:
 * Run this script a few times and verify the order of execution of the setTimeout() and setImeediate argument functions
 * setImmediate() will always be executed before any timers if scheduled within an I/O cycle of the event loop. This can be understood by the order of phases in the event loop (Exercise: Explain how.)
 * 
 * Hence, the results in this code below are always same - setImmediate log followed by the setTimeout one
 */
const fs = require( 'fs' );


fs.readFile( __dirname + '/reference.md', function( err, buffer ) {
    // console.log( buffer.toString() ); // uncomment to see the file contents output
    
    setTimeout(function() {
        console.log( '1b [setTimeout]' );
    }, 0);

    setImmediate(function() {
        console.log( '2b [setImmediate]' );
    });
});