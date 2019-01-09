/**
 * setTimeout() accepts a function as first argument and a millisecond value as second - it executes the passed function after the given number of milliseconds (provided the event loop not executing some other piece of code at at that time - if not it will be executed when it is free).
 * The setTimeout()'s function is actually executed in the "timers" phase of the event loop/ For more information on the different phases read the article at https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
 * 
 * Instructions:
 * Follow instructions provided in-place below, and check the order of the logs. What do you infer from it?
 * 
 * Exercise:
 * A related function setInterval() calls the passed function regularly at the end of an interval - explore this. 
 */
console.log( '1 [sync]' );

/**
 * 1. Call setTimeout and pass a function that should be called after 1000 milliseconds - the function logs a message
 */

console.log( '3 [sync]' );

/**
 * 1. Call setTimeout and pass a function that should be called as soon as the event loop is free (i.e. after "0" milliseconds) - the function logs a message
 */

console.log( '5 [sync]' );