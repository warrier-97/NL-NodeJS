function sum( a, b ) {
    return a + b; 
}

function sumAsync( a , b, callback ) {
    setImmediate(function() {
        callback( a + b );
    });
}

module.exports = {
    sum,
    sumAsync
};