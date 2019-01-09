console.log( '1 [sync]' );

setTimeout(function() {
    console.log( '2 [async]' );
}, 1000);

console.log( '3 [sync]' );

setTimeout(function() {
    console.log( '4 [async]' );
}, 0);

console.log( '5 [sync]' );