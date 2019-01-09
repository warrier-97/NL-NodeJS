/**
 * Buffer represents a raw block of binary data - It isn't a JS language data structure and is not allocated by the V8 runtime on its heap
 */
// initialized to 0 - make sure to use this to protect sensitive data from being exposed accidentally
let buffer1 = Buffer.alloc( 20 );

// uninitialized 20 bytes
let buffer2 = Buffer.allocUnsafe( 20 );

// Buffers can be created from data types like strings and arrays too
// we have used utf-8 specific characters - the first 2 characters fall within the ASCII set of characters and take 1 byte each. The last one takes 2 bytes
let str = '30˚';
let buffer3 = Buffer.from( str );

console.log( 'buffer1 = ', buffer1 );
console.log( 'buffer2 = ', buffer2 );
console.log( 'buffer3 = ', buffer3 );

console.log( `str.length = ${str.length}` );
console.log( `buffer3.length = ${buffer3.length}` );