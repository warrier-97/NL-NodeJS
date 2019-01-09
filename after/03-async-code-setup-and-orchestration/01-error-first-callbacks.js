/**
 * Node callbacks follow the "error-first" pattern. The error object is the first argument passed to the callback when it gets called. This forces the developer to handle error (since in JS trailing arguments passed may simply not have corresponding formal parameters in the callback function definition).
 * 
 * The callback(s) themselves are usually passed as the last argument(s) to the asynchronous method.
 * 
 * Note: A function that takes a callback need not always execute asynchronously (although it most likely will)
 */
function sumAsync( a, b, callback ) {
    if( typeof a !== 'number' || typeof b !== 'number' ) {
        process.nextTick( callback, new TypeError( 'not all arguments are numbers' ) );
        return;
    }

    setTimeout(function() {
        callback( null, a + b );
    });
}

sumAsync( 1, 'hello', ( err, sum ) => {
    if( err ) throw err;
    console.log( 'sum = ', sum )
});

// this line isn't output
console.log( 'end of script' );