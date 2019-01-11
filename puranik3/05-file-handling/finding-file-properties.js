const fs = require( 'fs' );

// Exercise: read the properties of index.html and print to console
// Your code...
fs.stat( './index.html', function( error, stats ) {
    console.dir( stats );
    console.log( new Date( stats.atimeMs ) );
});