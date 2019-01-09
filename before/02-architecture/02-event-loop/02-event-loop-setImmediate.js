/**
 * setImmediate() accepts a function as first argument and executes the passed function in the "check" phase of the event loop. For more information on the different phases read the article at https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
 * 
 * Instructions:
 * Follow instructions provided in-place below, and check the order of the logs. What do you infer from it?
 */
console.log( '1 [sync]' );

/**
 * 1. Call setImmediate and pass a function - the function should log a message
 */


console.log( '3 [sync]' );

/**
 * 2. Call setImmediate and pass a function - the function should log a message
 */


console.log( '5 [sync]' );