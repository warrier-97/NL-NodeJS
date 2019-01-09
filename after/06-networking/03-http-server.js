/**
 * Node stream http responses. The transfer encoding used is 'chunked'. This is very efficient as there is no need to buffer the output and send in one go. Instead it can be sent as and when available.
 * 
 * In the example below, two chunks are sent, one immediately when request is received, and one after 5 seconds.
 * 
 * Apart from the browser use curl to inspect the response in this example.
 * curl -i localhost:8080
 *
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
 */
const http = require( 'http' );
const loremIpsum = require( 'lorem-ipsum' );

const server = http.createServer();

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

server.on( 'request', ( req, res ) => {
    // use writeHead() to add HTTP headers to the response
    res.writeHead( 200, {
        'content-type': 'text/plain'
    });
    
    // use write() to write response - this does not terminate the request
    // the newline character causes the partial response to be sent immediately
    // let isFlushed = res.write( 'hello\n', 'utf8', console.log );
    // console.log( 'isFlushed = ', isFlushed );

    // setTimeout(() => {
    //     // you can write to HTTP response body even when terminating the HTTP request
    //     res.end( 'world' );
    // }, 5000);

    // use write() to write response - this does not terminate the request
    // the newline character causes the partial response to be sent immediately
    let isFlushed = res.write( loremIpsumParagraph(), 'utf8' );
    console.log( 'isFlushed = ', isFlushed );

    setTimeout(() => {
        // you can write to HTTP response body even when terminating the HTTP request
        res.end( 'world' );
    }, 5000);
});

// a server timeout can be specified to end the request prematurely
// uncomment this to see the server timeout
server.timeout = 2000;

// a list of HTTP status codes is maintained in http.STATUS_CODES
console.log( '*** http.STATUS_CODES ***' );
console.log( http.STATUS_CODES );

const port = process.env.PORT || 8080;

// start the server on desired port - the callback is actually bound as handler for the 'listening' event
server.listen(port, () => {
    console.log( `listening on port ${port}` );
});

// if an error occured when trying to start the server, we can handle using the 'error' event
server.once( 'error', ( err ) => {
    console.log( 'err = ', err );
    console.log( 'err.code = ', err.code );
});