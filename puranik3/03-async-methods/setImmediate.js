// What is the order of logs? When does 2 appear? When does 4 appear?
console.log( '1' );

// setImmediate is like setTimeout( fn, 0 )
setImmediate(function() {
    console.log( '2' );
});

console.log( '3' );

setImmediate(function() {
    console.log( '4' );
});

console.log( '5' );