console.log( '1 [sync]' );

setImmediate(function() {
    console.log( '2 [async]' );
});

console.log( '3 [sync]' );

setImmediate(function() {
    console.log( '4 [async]' );
});

console.log( '5 [sync]' );