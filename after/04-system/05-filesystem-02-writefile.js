const fs = require( 'fs' );

// this throws an error object on error
fs.writeFileSync( 'output-sync.txt', 'Hello, world' );
console.log( 'File output-sync.txt has been created synchronously' );

fs.writeFile( 'output-async.txt', 'Hello, world', err => {
    if (err) throw err;
    console.log( 'File output-async.txt has been created asynchronously' );
});