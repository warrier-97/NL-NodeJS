/** 
 * The async library is designed to handle asynchronous operations in Node. It can work in the browser as long as the asynchronous functions follow Node.js pattern of trailing callback + error-first callback.
 * They provide the usual iterator methods like map(), filter() etc. which accepts collections (arrays, objects and other iterables) and work in case of asynchronous iteratee methods.
 * But mainly, they help synchronize related async operations by enabling serial execution, parallel execution etc.
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

/**
 * Run the tasks collection of functions in parallel, without waiting until the previous function has completed. If any of the functions pass an error to its callback, the main callback is immediately called with the value of the error. Once the tasks have completed, the results are passed to the final callback as an array.
 */
async.parallel(
    [
        function( callback ) {
            sumAsync( 3, 4, callback );
        },
        function( callback ) {
            multAsync( 3, 4, callback );
        },
        function( callback ) {
            powAsync( 3, 4, callback );
        }
    ],
    function( err, results ) {
        if( err ) {
            // use return console.log( err ); if you want execution to end at this line
            console.log( err.message );
        }
        console.log( results );
    }
);

/*
 * It is also possible to use an object instead of an array. Each property will be run as a function and the results will be passed to the final callback as an object instead of an array. This can be a more readable way of handling results from async.parallel.
 */
async.parallel(
    {
        sum: function( callback ) {
            sumAsync( 3, 4, callback );
        },
        product: function( callback ) {
            multAsync( 3, 4, callback );
        },
        power: function( callback ) {
            powAsync( 3, 4, callback );
        }
    },
    function( err, results ) {
        if( err ) {
            // use return console.log( err ); if you want execution to end at this line
            console.log( err.message );
        }
        console.log( results );
    }
);
