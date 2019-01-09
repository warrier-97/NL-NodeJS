/**
 * Instructions:
 * 1. Install and require the async module
 * 2. async.map() produces a new collection of values by mapping each value in coll through the iteratee function. The iteratee is called with an item from coll and a callback for when it has finished processing. Each of these callback takes 2 arguments: an error, and the transformed item from coll. If iteratee passes an error to its callback, the main callback (for the map function) is immediately called with the error.
 * Use async.map(), passing it an array of number, squareAsync, and a callback that gets passed err, results.
 * 3. Do the same for sumAsync(), passing it an array of two-tuples.
 * 4. async.filter() returns a new array of all the values in coll which pass an async truth test. This operation is performed in parallel, but the results array will be in the same order as the original. Use async.filter() along with sumAsync to select only those tuples whose values add up to a number greater than 10
 *
 * 
 * Sample array of 2-tuples
 * [ 4, 8 ], [ 3, 6 ], [ 7, 3 ], [ 1, 8 ], [ 4, 5 ], [ 8, 9 ]
 * 
 * Note: Chance of an error in sumAsync() is 1 - ( 1 - 0.05 ) ^ (array.length)
 */
const async = require( 'async' );

const random = ( min, max ) => {
    return Math.floor( Math.random() * Math.abs( max - min + 1 ) );
};

const squareAsync = ( n, callback ) => {
    // The iteratee function but be truly async in order to work in all cases - if you see an synchronous control flow for some case, make it asynchronous using async.setImmediate()
    async.setImmediate( () => {
        callback( null, n * n );
    });
};

const sumAsync = ( tuple, callback ) =>{
    setTimeout(() => {
        if( random( 1, 20 ) === 1 ) { /* simulate a 0.05 chance of error */
            return callback( new Error( `Could not perform operation ${tuple[0]} + ${tuple[1]}` ) );
        }
        callback( null, tuple[0] + tuple[1] );
    }, random( 1, 3 ) * 1000 );
};