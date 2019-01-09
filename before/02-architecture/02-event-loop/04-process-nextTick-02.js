/**
 * process.nextTick() executes as soon as the call stack is clear, i.e after the currently executing callback, or piece of synchronous code executes.
 * Its callback is not associated with any particular phase (queue) of the event loop
 * 
 * Instructions:
 * Do the same thing as in the previous exercise. However in case numbers are not passed, make sure to call the callback, with an error object, on the next "tick" of the event loop, using process.nextTick( callback, arg1, arg2, ... ) where arg1, arg2, ... are arguments that callback will receive when called.
 * 
 * The above step makes sumAsync() a "pure" asynchronous function. Note the order of the logs now in case of right and wrong input - it will be same.
 */
function sumAsync( a, b, callback ) {

}

/**
 * Call sumAsync first with numbers, then change to non-numbers
 */




 

console.log( 'end of script' );