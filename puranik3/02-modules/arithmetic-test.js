/**
 * aritmetic.js module is included here
 */
const { sum, diff } = require( './arithmetic.js' );
const { squareOfSum } = require( './advanced-arithmetic.js' );

console.log( sum( 10, 20 ) );
console.log( diff( 10, 20 ) );
console.log( squareOfSum( 10, 20 ) );