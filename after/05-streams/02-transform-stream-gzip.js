/**
 * Streams are of 4 types
 * 1. Readable - example: incoming request to HTTP server
 * 2. Writable - example: outgoing response of HTTP server
 * 3. Duplex (both Readable and Writable) - example: sockets
 * 4. Transform - these transform the input to produce and output. Below - zlib is used to create zip transform streams 
 * 
 * Instructions:
 * 1. To zip (creates abc.txt.gz for example below)
 * ```node 02-transform-stream-gzip.js zip abc.txt```
 * 2. To unzip gzipped file ending with .gz extension (creates abc.txt for example below)
 * ```node 02-transform-stream-gzip.js unzip abc.txt.gz```
 * 
 * Since streams are event emitters, we can hook into the streaming process at various stages. Here we hook into progress (data event) and end (finish event).
 */
const fs = require( 'fs' );
const zlib = require( 'zlib' );

const file = process.argv[3];
console.log( file );

switch( process.argv[2] ) {
    case 'zip':
        fs.createReadStream( file )
          .pipe( zlib.createGzip() )
          .on( 'data', ( data ) => process.stdout.write( data ) )
          .pipe( fs.createWriteStream( file + '.gz' ) )
          .on( 'finish', () => console.log( '\nCreated ' + file + '.gz' ) + '\n' );
        break;
    case 'unzip':
        let outFilename = file.substring( 0, file.lastIndexOf( '.gz' ) );
        fs.createReadStream( file )
          .pipe( zlib.createGunzip() )
          .on( 'data', ( data ) => process.stdout.write( data ) )
          .pipe( fs.createWriteStream( outFilename ) )
          .on( 'finish', () => console.log( '\nCreated ' + outFilename + '\n' ) );
        break;
    default:
        console.log( 'Unsupported action' );
}