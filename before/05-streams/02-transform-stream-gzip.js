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
 * Note: zlib.createGzip() creates a zip transform stream and zlib.createGunzip() creates a unzip transfor stream.
 */