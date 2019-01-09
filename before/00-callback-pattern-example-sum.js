function sum( a, b, callback ) {
    setTimeout(function() {
        var result = a + b;
        callback( result );
    }, 1000);
}

function foo() {
    for( let i = 0; i < 10; i++ ) {
        
    }
    console.log( i ); // not allowed
}

var sum = function( a, b ) {
    return a + b;
};

function logResult( result ) {
    console.log( 'result = ', result );
}

sum( 1, 2, logResult );