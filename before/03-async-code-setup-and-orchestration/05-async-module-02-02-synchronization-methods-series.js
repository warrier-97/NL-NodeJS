/**
 * Instructions:
 * 1. async.parallel() is used to run the functions in the tasks collection in series, each one running once the previous function has completed. If any functions in the series pass an error to its callback, no more functions are run, and callback is immediately called with the value of the error. Otherwise, callback receives an array of results when tasks have completed. Use it to call sumAsync(), multAsync and powAsync() in series.
 * Make sure to try the 2 versions for providing functions
 *  a) As an array of functions
 *  b) As an object with functions as values.
 */
const async = require( 'async' );

const random = ( min, max ) => {
    return Math.floor( Math.random() * Math.abs( max - min + 1 ) );
};

const sumAsync = ( a, b, callback ) =>{
    setTimeout(() => {
        if( random( 1, 20 ) === 1 ) {
            return callback( new Error( `Could not perform operation ${a} + ${b}` ) );
        }
        callback( null, a + b );
    }, random( 1, 3 ) * 1000 );
};

const multAsync = ( a, b, callback ) =>{
    setTimeout(() => {
        if( random( 1, 20 ) === 1 ) {
            return callback( new Error( `Could not perform operation ${a} * ${b}` ) );
        }
        callback( null, a * b );
    }, random( 1, 3 ) * 1000 );
};

const powAsync = ( a, b, callback ) =>{
    setTimeout(() => {
        if( random( 1, 20 ) === 1 ) {
            return callback( new Error( `Could not perform operation ${a} ^ ${b}` ) );
        }
        callback( null, Math.pow( a, b ) );
    }, random( 1, 3 ) * 1000 );
};