const fs = require( 'fs' );

// Asynchronous version to get file statistics
fs.stat( __filename, ( err, stats ) => {
    if( err ) throw err;

    console.log( 'Size of this file : %d bytes', stats.size );

    // mTime and aTime are Date objects
    console.log( 'This file was last modified on : ', stats.mtime.toString() );
    console.log( 'This file was last accessed on : ', stats.atime.toString() );
});

// Exercise: Do the same using the synchronous version