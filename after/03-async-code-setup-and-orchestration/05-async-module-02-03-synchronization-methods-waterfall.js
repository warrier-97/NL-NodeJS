/** 
 * The async library is designed to handle asynchronous operations in Node. It can work in the browser as long as the asynchronous functions follow Node.js pattern of trailing callback + error-first callback.
 * They provide the usual iterator methods like map(), filter() etc. which accepts collections (arrays, objects and other iterables) and work in case of asynchronous iteratee methods.
 * But mainly, they help synchronize related async operations by enabling serial execution, parallel execution etc.
 */
const async = require( 'async' );
const db = require( './db.json' );

const random = ( min, max ) => {
    return Math.floor( Math.random() * Math.abs( max - min + 1 ) );
};

const getBook = ( name, callback ) => {
    setTimeout(() => {
        if( random( 1, 20 ) === 1 ) {
            return callback( new Error( `Could not fetch book details` ) );
        }
        callback( null, db.books.find( book => book.name === name ) );
    }, random( 1, 3 ) * 1000 );
};

const getAuthor = ( name, callback ) =>{
    setTimeout(() => {
        if( random( 1, 20 ) === 1 ) {
            return callback( new Error( `Could not fetch author details` ) );
        }
        callback( null, db.authors.find( author => author.name === name ) );
    }, random( 1, 3 ) * 1000 );
};

/**
 * Runs the tasks array of functions in series, each passing their results to the next in the array. However, if any of the tasks pass an error to their own callback, the next function is not executed, and the main callback is immediately called with the error.
 */
async.waterfall(
    [
        function( callback ) {
            getBook( "The Prisoner of Azkaban", callback );
        },
        function( book, callback ) {
            getAuthor( book.author, callback );
        }
    ],
    function( err, result ) {
        if( err ) {
            // use return console.log( err ); if you want execution to end at this line
            console.log( err.message );
        }
        console.log( result );
    }
);