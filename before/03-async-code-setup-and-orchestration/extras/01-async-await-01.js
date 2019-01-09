async function sumAsync( a, b, cb = () => {} ) {
    return new Promise(( resolve, reject ) => {
        if( typeof a !== 'number' || typeof b !== 'number' ) {
            var err = new TypeError( 'not all arguments are numbers' );
            reject( err );
        }

        setTimeout( () => {
            var sum = a + b;
            resolve( sum );
        }, 0);
    });
}

async function init() {
    try {
        // await can be used only inside a function marked async
        // also, await cannot be used globally
        var sum1 = await sumAsync( 1, 2 );
        var sum2 = await sumAsync( 3, 7 );
        console.log( sum1, sum2 );
    } catch( err ) {
        console.error( err );
    }
}

init();