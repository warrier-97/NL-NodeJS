/**
 * Instructions:
 * 1. async.parallel() is used to run the tasks collection of functions in parallel, without waiting until the previous function has completed. If any of the functions pass an error to its callback, the main callback is immediately called with the value of the error. Once the tasks have completed, the results are passed to the final callback as an array. Use it to call sumAsync(), multAsync and powAsync() in parallel.
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