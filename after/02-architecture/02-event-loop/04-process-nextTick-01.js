function sumAsync( a, b, callback ) {
    if( typeof a !== 'number' || typeof b !== 'number' ) {
        callback( new TypeError( 'not all arguments are numbers' ) );
    }

    setTimeout(function() {
        callback( null, a + b );
    }, 0);
}

sumAsync( 1, 2, ( err, sum ) => {
    if( err ) throw err;
    console.log( 'sum = ', sum )
});

// this line is output
console.log( 'end of script' );
