const express = require( 'express' );
const indexRouter = require( './routers/index' );
const productsRouter = require( './routers/products' );
const reviewsRouter = require( './routers/reviews' );
const app = express();

// middleware functions
// executed in order in which they are set
app.use( express.json() ); // parse JSON data
app.use( express.urlencoded() ); // parse form data 

// associate the routers with the application
app.use( indexRouter );
app.use( productsRouter );
app.use( reviewsRouter );

app.listen( 8080, function( error ) {
    if( error ) {
        console.log( 'error starting server' );
        return;
    }

    console.log( 'Check http://localhost:8080/' );
});