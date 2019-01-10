console.log( 'arithmetic.js executed' );
// exports = module.exports = {}

// Export syntax #1
// module.exports.sum = ( x, y ) => x + y;
// module.exports.diff = ( x, y ) => x - y;

// Export syntax #2
exports.sum = ( x, y ) => x + y;
exports.diff = ( x, y ) => x - y;

const mult = ( x, y ) => x * y;

// Export syntax #3
// module.exports = {
//     "sum": sum,
//     "diff": diff
// };