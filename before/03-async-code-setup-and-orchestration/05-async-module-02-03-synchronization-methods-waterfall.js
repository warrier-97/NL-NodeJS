/**
 * Instructions:
 * 1. async.waterfall() is used to run the tasks array of functions in series, each passing their results to the next in the array. However, if any of the tasks pass an error to their own callback, the next function is not executed, and the main callback is immediately called with the error. Use it to call getBook() passing name of a book, then pass the returned book object to another function that calls getAuthor() to get aithor details. Finally print the results (author details) in callback of async.waterfall()
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

const getAuthor = ( name, callback ) => {
    setTimeout(() => {
        if( random( 1, 20 ) === 1 ) {
            return callback( new Error( `Could not fetch author details` ) );
        }
        callback( null, db.authors.find( author => author.name === name ) );
    }, random( 1, 3 ) * 1000 );
};