/**
 * run this a few times to see different results
 * the functions need not get executed in the order they get queued
 * this is because they go into different phases of the event loop (and hence different queues)
 */
setTimeout(function() {
    console.log( '1a [setTimeout]' );
}, 0);

setImmediate(function() {
    console.log( '2a [setImmediate]' );
});