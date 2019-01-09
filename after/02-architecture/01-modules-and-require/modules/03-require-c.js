console.log( '*** module c execution starts ***' );

console.log( require( './03-require-a' ) );
require( './03-require-b' );

console.log( '*** module c execution ends ***' );