/**
 * The http module can be used to issue HTTP requests (thus making the node process itself an HTTP client) - example when an API call is made from the server end. In this case the object returned by http.request() is of type http.ClientRequest, which is both a writable stream and an event emitter.
 * 
 * The code below makes a GET request, but in general any kind of HTTP request can be made.
 * Notice that the callback isn't an error-first callback. In fact it gets registered as a one-time event handler on the request object for the 'response' event. It is passed an http.IncomingMessage object.
 * 
 * We make use of the blog-server as the backend for this example.
 * 
 * Note: The https module has API similar to the http module.
 */
const http = require( 'http' );
 
let request = http.request(
    {
        method: 'GET',
        hostname: '127.0.0.1',
        port: '4201',
        path: '/posts',
    },
    // option 1 for listening to response - the response object res is of type http.IncomingMessage, and an event emitter
    ( res ) => {
        console.log( 'handler 1' );
        console.log( res.statusCode );
        console.log( res.headers );

        res.on( 'data', ( chunk ) => {
            console.log( 'response body : ', chunk.toString() );
        });
    }
);

// option 2 for listening to response
request.once( 'response', ( res ) => {
    console.log( 'handler 2' );
    console.log( res.statusCode );
    console.log( res.headers );
});

request.on( 'error', ( err ) => console.log( err ) );

// since request is a writable stream, we can also use request.write() - this is useful in case of POSTing data
// request.write()

// send the request by calling request.end() and terminating the writable stream
request.end();