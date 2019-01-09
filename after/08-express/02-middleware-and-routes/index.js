/// <reference path="../../../node_modules/@types/express/index.d.ts" />
/// <reference path="../../../node_modules/@types/express-serve-static-core/index.d.ts" />

const express = require( 'express' );
const http = require( 'http' );
const path = require( 'path' );
const indexRouter = require( './routes/index.js' );

const app = express();

/**
 * Express pre-processes requests via middleware.
 * Middleware is a function that receives the request, response objects and a next() method to be called when the middleware's job is done
 * Calling next() triggers execution of next middleware in the sequence
 * A middleware is added using the app.use() method - the first argument is an optional route base path that should trigger the middleware - if this is not provided the middleware is called for each request.
 * A middleware can accept either err, req, res and next, or simply req, res and next
 */
// Middleware to log request received time
app.use( ( req, res, next ) => {
    console.log( 'Request received at ', (new Date()).toString() );
    next(); // Don't forget to call next() once the job (whihc may be asynchronous) is done - else your will leave your browser waiting for a response
});

// Middleware to log request headers
app.use( ( req, res, next ) => {
    console.log( 'Request headers are : ', req.headers );
    next();
});

// There are 2 ways to add routes
// 1. Directly on the express app object
// 2. Configure it on the router and set as the middleware

// Method #1
// configure router paths
// app.get( '/', ( req, res, next ) => {
//     res.sendFile( path.join( __dirname, 'html/index.html' ) );
// });

// app.get( '/about', ( req, res, next ) => {
//     res.sendFile( path.join( __dirname, 'html/about.html' ) );
// });

// Method #2: We use the router middleware
// mount base paths to configure routing using middleware
app.use( '/', indexRouter );

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    // create an error object
    var err = new Error('Not Found');
    err.status = 404;
    next(err); // pass the error object to the next piece of middleware
});

// error handler
app.use(function(err, req, res, next) {
    // res.status() is used to set the HTTP response code
    res.status(404).sendFile( path.join( __dirname, 'html/404.html' ) );
    console.error( 'Page requested by user was not found' );
    console.error( err );
});

const port = process.env.PORT || 3000;

app.listen( port, err => {
    if( err ) throw err;

    console.log( 'Express Server is listening on port ' + port );
});
