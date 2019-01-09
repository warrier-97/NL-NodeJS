// when there is no callback function to be executed by the event loop (or an explicit call to process.exit() is done), the node process exits. The handler for exit event emitted cannot execute asynchronous callbacks as the process is exit before that can be done.
process.on( 'exit', function( exitCode ) {
    console.dir( '*** exit event exitCode ***' );
    console.dir( exitCode );
});

// any unhandled exceptions will bubble up to this handler
// since the exception is handled, node process will not exit
// Exercise: Comment this handler and see what happens - you will see that process execution stops when exception occurs
process.on( 'uncaughtException', function( err ) {
    console.dir( '*** uncaughtException error object ***' );
    console.error( err );

    // to exit explicitly we can use process.exit() - uncomment and check
    // process.exit( 1 ); // exit the process passing custom error code
});

// raise an exception after 5 seconds - no function called foo has been defined
setTimeout(function() {
    foo();
}, 5000);

let i = 1;
let id = setInterval(function() {
    console.log( i++ );

    if( i > 10 ) {
        clearInterval( id );
    }
}, 1000);


