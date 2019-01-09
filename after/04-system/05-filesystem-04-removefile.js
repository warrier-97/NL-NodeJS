const fs = require( 'fs' );
const path = require( 'path' );

// Asynchronous version to delete a file
fs.unlink( path.join( __dirname, 'output-async.txt' ), err => {
    if( err ) throw err;

    console.log( 'output-async.txt was successfully deleted' );
});

// Exercise: Do the same using the synchronous version