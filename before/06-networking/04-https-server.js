/**
 * Instructions:
 * 1. Generate and use a self-signed certificate
 * ```
 * openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -nodes
 * ```
 * 2. Require https and fs modules.
 * 3. Create an HTTPS server, passing an object with key and cert properties. The values are read from the key.pem and cert.pem files (using readFileSync() say).
 * 4. Start the server
 * 5. Handle 'request' event
 */