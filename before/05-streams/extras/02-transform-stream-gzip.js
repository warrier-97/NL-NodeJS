/**
 * Streams are of 4 types
 * 1. Readable - example: incoming request to HTTP server
 * 2. Writable - example: outgoing response of HTTP server
 * 3. Duplex (both Readable and Writable) - example: sockets
 * 4. Transform - these transform the input to produce and output. Below - zlib and crypto are used to create zip and encryption transform streams 
 * 
 * Instructions:
 * 1. To zip and encrypt (creates abc.txt.gz for example below)
 * ```node 02-transform-stream-gzip.js zip abc.txt <secret_key>```
 * 2. To decrypt and unzip gzipped file ending with .gz extension (creates abc.txt for example below)
 * ```node 02-transform-stream-gzip.js unzip abc.txt.gz <secret_key>```
 * 
 * Since streams are event emitters, we can hook into the streaming process at various stages. Here we hook into progress (data event) and end (finish event).
 */
const fs = require( 'fs' );
const zlib = require( 'zlib' );
const crypto = require( 'crypto' );
const file = process.argv[3];
const secret = process.argv[4];

switch( process.argv[2] ) {
    case 'zip':
        fs.createReadStream( file )
          .pipe( zlib.createGzip() )
          .on( 'data', () => process.stdout.write( 'z' ) )
          .pipe( crypto.createCipher( 'aes192', secret ) )
          .on( 'data', () => process.stdout.write( 'x' ) )
          .pipe( fs.createWriteStream( file + '.gz' ) )
          .on( 'finish', () => console.log( '\nCreated ' + file + '.gz' ) + '\n' );
        break;
    case 'unzip':
        let outFilename = file.substring( 0, file.lastIndexOf( '.gz' ) );
        fs.createReadStream( file )
          .pipe( crypto.createCipher( 'aes192', secret ) )
          .on( 'data', () => process.stdout.write( 'x' ) )
          .pipe( zlib.createGunzip() )
          .on( 'data', () => process.stdout.write( 'z' ) )
          .pipe( fs.createWriteStream( outFilename ) )
          .on( 'finish', () => console.log( '\nCreated ' + outFilename + '\n' ) );
        break;
    default:
        console.log( 'Unsupported action' );
}