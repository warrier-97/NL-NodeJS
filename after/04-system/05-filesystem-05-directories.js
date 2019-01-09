/**
 * The fs module gives acceess to the filesystem via methods that usually have noth a synchronous and an asynchronous version
 */
const fs = require( 'fs' );
const path = require( 'path' );

// Read a directory synchronously (not the preferred way to read directories)
// It returns an array of filenames excluding ./ and ../
const files = fs.readdirSync( __dirname, 'utf8' );
console.log( '*** directory contents (retrieved synchronously) ***\n', files );


// Read a directory asynchronously (preferred way to read directories)
fs.readdir( __dirname, ( err, files ) => {
    if( err ) throw err;

    console.log( '*** directory contents (retrieved asynchronously) ***\n', files );
});

// Read the parent directory
fs.readdir( path.join( __dirname, '..' ), ( err, files ) => {
    if( err ) throw err;

    console.log( '*** parent directory contents (retrieved asynchronously) ***\n', files );
});

// Synchronous method to create a directory
fs.mkdirSync( 'tmp' );

// Exercise: Explore the asynchronous version to create a directory