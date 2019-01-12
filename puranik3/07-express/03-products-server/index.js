const express = require( 'express' );
const indexRouter = require( './routers/index' );
const productsRouter = require( './routers/products' );
const reviewsRouter = require( './routers/reviews' );
const chalk = require( 'chalk' );

const app = express();

app.use(function( req, res, next ) {
    req.receivedAt = new Date();
    
    // pass control to the next middleware - without this your server will not send response
    next();
});

// Exercise: Write a middleware that logs receivedAt to the console
app.use(function( req, res, next ) {
    console.log( chalk.red( 'Request was received at ' + req.receivedAt ) );
    next();
});

// middleware functions
// executed in order in which they are set
app.use( express.json() ); // parse JSON data
app.use( express.urlencoded( { extended : false } ) ); // parse form data 

// associate the routers with the application
app.use( indexRouter );
app.use( '/products', productsRouter );
app.use( '/reviews', reviewsRouter );

app.listen( 8080, function( error ) {
    if( error ) {
        console.log( 'error starting server' );
        return;
    }

    console.log( 'Check http://localhost:8080/' );
});