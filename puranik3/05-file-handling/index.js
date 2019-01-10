const fs = require( 'fs' ); // filesystem built-in module

fs.readFile( './index.html', /*'utf8',*/ function( error, data ) { // error-first callback
    if( error ) {
        console.log( 'Error while reading file | error = ' + error.message );
        return;
    }

    console.log( '*** file contents ***' );
    console.log( data.toString() ); /* data is a Buffer object */
});

// Exercise for right now: 2 mins  - how to get string data from raw bytes

// Exercise:
// Create another file contact.html
// 
// http://localhost:8080/ - index.html
// http://localhost:8080/contacts - contacts.html