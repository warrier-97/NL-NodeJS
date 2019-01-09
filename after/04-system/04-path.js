/**
 * The path module provides utilities for working with file and directory paths.
 * 
 * It takes care of OS differences in file names and paths and works consistently across different platforms - so make sure to use it when working with file paths (instead of performing string operations like substring extraction, concatenation etc.)
 * 
 * It also manages adding path delimiters as and when required and supports use of ./ and ../ too
 */
const path = require( 'path' );

const filename = __filename, dirname = __dirname

console.log( `dirname = ${dirname}` );
console.log( `filename = ${filename}` );
console.log( `path.dirname( filename ) = ${path.dirname( filename )}` );
console.log( `path.basename( filename ) = ${path.basename( filename )}` );
console.log( `path.extname( filename ) = ${path.extname( filename )}` );
console.log( `path.parse( filename ) = `, path.parse( filename ) );
console.log( `path.join( '/', 'usr/bin', 'tmp' ) = `, path.join( '/', 'usr/bin', 'tmp' ) );
console.log( `path.join( '/', 'usr/bin', 'tmp', '../../', 'etc' ) = `, path.join( '/', 'usr/bin', 'tmp', '../../', 'etc' ) );