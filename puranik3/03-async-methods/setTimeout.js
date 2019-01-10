// What is the order of logs? When does 2 appear? When does 4 appear?
console.log( '1' );

setTimeout(function() {
    console.log( '2' );
}, 0);

console.log( '3' );

setTimeout(function() {
    console.log( '4' );
}, 0)

console.log( '5' );