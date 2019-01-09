let a = require( './test-a' );
console.log( 'a.x = ', a.x );

setImmediate(() => {
    console.log( 'a.x = ', a.x );
});