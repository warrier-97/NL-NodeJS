/**
 * process.nextTick() executes as soon as the call stack is clear, i.e after the currently executing callback, or piece of synchronous code executes.
 * Its callback is not associated with any particular phase (queue) of the event loop
 */
function sumAsync( a, b, callback ) {
    if( typeof a !== 'number' || typeof b !== 'number' ) {
        process.nextTick( callback, new TypeError( 'not all arguments are numbers' ) );

        // the above can be done this way too using nested function call (both are equivalent )
        // process.nextTick( () => callback( new TypeError( 'not all arguments are numbers' ) ) );
    }

    setTimeout(function() {
        callback( null, a + b );
    }, 0);
}

sumAsync( 1, 'hello', ( err, sum ) => {
    if( err ) throw err;
    console.log( 'sum = ', sum )
});

// this line isn't output
console.log( 'end of script' );