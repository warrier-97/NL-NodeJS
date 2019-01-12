const express = require( 'express' );
const indexRouter = require( './routers/index' );
const productsRouter = require( './routers/products' );
const reviewsRouter = require( './routers/reviews' );
const chalk = require( 'chalk' );
const path = require( 'path' );
const fs = require( 'fs' );
const morgan = require( 'morgan' );

console.log( process.env.NODE_ENV );

const app = express();
console.log( app.get( 'env' ) ); // same as process.env.NODE_ENV (this is NOT for setting up route)
app.set( 'title', 'Awesome Store' );
app.set( 'version', '1.0.0' );

// setup the logger - We use morgan in production environment, and custom console logger otherwise
if( process.env.NODE_ENV === 'production' ) {
    const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
    app.use(morgan('combined', { stream: accessLogStream }));
}

if( process.env.NODE_ENV !== 'production' ) {
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
}

// middleware functions
// executed in order in which they are set
app.use( express.json() ); // parse JSON data
app.use( express.urlencoded( { extended : false } ) ); // parse form data 

// associate the routers with the application
app.use( indexRouter );
app.use( '/products', productsRouter );
app.use( '/reviews', reviewsRouter );

const port = process.env.PORT || 8080;

app.listen( port, function( error ) {
    if( error ) {
        console.log( 'error starting server' );
        return;
    }

    console.log( 'Check http://localhost:8080/' );
});