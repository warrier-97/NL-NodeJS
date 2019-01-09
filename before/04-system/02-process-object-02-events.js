/**
 * Instructions:
 * 1. When there is no callback function to be executed by the event loop (or an explicit call to process.exit() is done), the node process exits. The handler for exit event emitted cannot execute asynchronous callbacks as the process is exit before that can be done. Handle the event and log the exitCode passed as argument to it.
 * 2. Any unhandled exceptions will bubble up to the 'uncaughtException' handler. Since the exception is handled, node process will not exit. To exit explicitly we can use process.exit() - try this too. Handle this event and log the passed error object. Also, comment this handler and see what happens - you will see that process execution stops when exception occurs.
 * 
 */


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


