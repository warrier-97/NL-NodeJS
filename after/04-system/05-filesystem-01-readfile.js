/**
 * The fs module gives acceess to the filesystem via methods that usually have noth a synchronous and an asynchronous version
 */
const fs = require( 'fs' );

// Read a file synchronously (not the preferred way to read files)
// The readFileSync() method throws error object in case of error - the statement can thus be enclosed in a try..catch block
// If the encoding is not specified as second argument, the returned data is a buffer object
const data = fs.readFileSync( __filename, 'utf8' );
console.log( '*** file contents (retrieved synchronously) ***\n', data );


// Read a file asynchronously (preferred way to read files)
fs.readFile( __filename, ( err, data ) => { // data is a buffer object
    if( err ) throw err;

    console.log( '*** file contents (retrieved asynchronously) ***\n', data.toString() );
});