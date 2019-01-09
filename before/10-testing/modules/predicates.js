function isEven( num ) {
    if( parseInt( num ) !== num ) {
        throw new TypeError( 'Expected integer, received non-integer' );
    }
    return num % 2 === 0; 
}

module.exports = {
    isEven
};