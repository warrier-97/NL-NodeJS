/**
 *  Express pre-processes requests via middleware.
 * Middleware is a function that receives the request, response objects and a next() method to be called when the middleware's job is done
 * Calling next() triggers execution of next middleware in the sequence
 * A middleware is added using the app.use() method - the first argument is an optional route base path that should trigger the middleware - if this is not provided the middleware is called for each request.
 * A middleware can accept either err, req, res and next, or simply req, res and next
 * 
 * Instructions:
 * 1. Create an Express web server as before and start it.
 * 2. Create an app-level middleware to log the time request was received, and one more to log request headers (req.headers) - don't forget to call next()
 * 
 * Instead of using the app methods to do all the routing, you can use the express.Router class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a "mini-app".
 * 3. Create a separate router script file, preferably within a separate folder, say routes/
 * 4. Within it, create a router object (express.Router())
 * 5. Set a router-level middleware that simply logs that the request is being handled by the router.
 * 6. Set the '/' and '/about' routes
 * 7. Export the router and require it in this file. Set the router as an app-level middleware
 * 8. Create error handling middleware function(s) at the application level, as the final piece of middleware to handle any unhandled request. For example the first may generate an error object and the second may send the 404 page. The last piece of middleware will thus reveive ( err, req, res, next ) instead of ( req, res, next ) 
 */