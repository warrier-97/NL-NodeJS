/**
 * The http module can be used to issue HTTP requests (thus making the node process itself an HTTP client) - example when an API call is made from the server end. In this case the object returned by http.request() is of type http.ClientRequest, which is both a writable stream and an event emitter.
 * 
 * The code below makes a GET request, but in general any kind of HTTP request can be made.
 * Notice that the callback isn't an error-first callback. In fact it gets registered as a one-time event handler on the request object for the 'response' event. It is passed an http.IncomingMessage object.
 * 
 * We make use of the blog-server as the backend for this example.
 * 
 * Note: The https module has API similar to the http module.
 * 
 * Instructions:
 * 1. Create an http.ClientRequest using http.request() - pass it object with method, hostname, port and path.
 * 2. Call request.end() to send out request.
 * 3. The callback gets response object. This is one way to listen for response. Set 'data' event listener on response object to read chunks sent. Check res.statusCode and res.headers.
 * 4. Use the request object's 'response' event to get response too. This is the second way.
 * 5. Also handle the request's 'error' event
 */