/**
 * Classes related to HTTP
 * ======================= 
 * Below are 4 important classes related to the http module. All of them are event emitters. http.IncomingMessage is a readable stream, whereas http.ServerResponse and http.ClientRequest are writable streams.
 *  
 * 1. The HTTP server is of type http.Server
 * 
 * 2. The req object (in callback below) received on HTTP request is of type http.IncomingMessage
 * 3. The res object created for HTTP request is of type http.ServerResponse
 * 
 * 4. Apart from these the http module can be used to issue HTTP requests (thus making the node process itself an HTTP client) - example when an API call is made from the server end. In this case the object created is of type http.ClientRequest
 * --
 * Node stream http responses. The transfer encoding used is 'chunked'. This is very efficient as there is no need to buffer the output and send in one go. Instead it can be sent as and when available.
 * 
 * In the example below, two chunks are sent, one immediately when request is received, and one after 5 seconds.
 * 
 * Apart from the browser use curl to inspect the response in this example.
 * curl -i localhost:8080
 * 
 * Instructions:
 * 1. Require http and install and require lorem-ipsum (say, as loremIpsum)
 * 2. Create an HTTP server using http.createServer()
 * 3. Use server.listen() to start the server
 * 4. Use server's error event to handle failure of server start 
 * 5. Handle server 'request' event that's fired on HTTP request - the callback gets req (IncomingMessage), res (ServerResponse).
 *  a) Use res.writeHead( status_code, headers_object ) to write headers (content-type is text/plain)
 *  b) Use res.write( string, 'utf8' ) to send lorem ipsum text
 *  c) End the response asyncronously after 5 seconds - use res.end( string );
 * 6. Experiment with server.timeout = milliseconds to verify automatic timeouts
 * 7. Check out http.STATUS_CODES
 */
var http = require( )
let loremIpsumParagraph = function() {
    return loremIpsum({
        count: 10,
        units: 'paragraphs',
        sentenceLowerBound: 10,
        sentenceUpperBound: 20,
        paragraphLowerBound: 3,
        paragraphUpperBound: 7
    });
}