/**
 * aritmetic.js module is included here too
 */
const { sum } = require( './arithmetic.js' );

module.exports.squareOfSum = ( x, y ) => sum( x, y ) * sum( x, y );





/**
 * QUESTION: Does arithmetic.js module run once or twice? How did you conclude?
 */