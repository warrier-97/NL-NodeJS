/** 
 * The async library is designed to handle asynchronous operations in Node. It can work in the browser as long as the asynchronous functions follow Node.js pattern of trailing callback + error-first callback.
 * They provide the usual iterator methods like map(), filter() etc. which accepts collections (arrays, objects and other iterables) and work in case of asynchronous iteratee methods.
 * But mainly, they help synchronize related async operations by enabling serial execution, parallel execution etc.
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

/**
 * async.map() produces a new collection of values by mapping each value in coll through the iteratee function. The iteratee is called with an item from coll and a callback for when it has finished processing. Each of these callback takes 2 arguments: an error, and the transformed item from coll. If iteratee passes an error to its callback, the main callback (for the map function) is immediately called with the error.
 */
async.map( [ 1, 2, 3, 4 ], squareAsync, ( err, results ) => {
    if( err ) throw err;
    
    console.log( results );
});

// Note: Chance of an error is 1 - ( 1 - 0.05 ) ^ 6 = 0.2649
async.map( 
    [ 
        [ 4, 8 ],
        [ 3, 6 ],
        [ 7, 3 ],
        [ 1, 8 ],
        [ 4, 5 ],
        [ 8, 9 ]
    ],
    sumAsync,
    ( err, results ) => {
        if( err ) {
            // Note: The return is required since we don't want execution to continue past this line
            return console.error( 'An error occured [' + err.message + ']' );
        };
        console.log( results );
    }
);

/**
 * async.filter() returns a new array of all the values in coll which pass an async truth test. This operation is performed in parallel, but the results array will be in the same order as the original.
 */
async.filter( 
    [ 
        [ 4, 8 ],
        [ 3, 6 ],
        [ 7, 3 ],
        [ 1, 8 ],
        [ 4, 5 ],
        [ 8, 9 ]
    ],
    ( item, callback ) => {
        sumAsync( item, ( err, result ) => {
            callback( err, result >= 10 );
        });
    },
    ( err, results ) => {
        if( err ) {
            return console.error( 'An error occured [' + err.message + ']' );
        };
        console.log( results );
    }
);