/**
 * The body-parser middleware helps parse data passed in the request body. The data is made available under req.body. We can handle both JSON data as well as URL encoded data (other formats can also be handled but these are the commonly used ones).
 * ```
 * $ npm install --save body-parser
 * ```
 * 
 * The cookie parser middleware helps parse cookies sent from client. 
 * ```
 * $ npm install --save cookie-parser
 * ```
 */
/// <reference path="../../../node_modules/@types/express/index.d.ts" />
/// <reference path="../../../node_modules/@types/express-serve-static-core/index.d.ts" />

const express = require( 'express' );
const http = require( 'http' );
const path = require( 'path' );
const bodyParser = require( 'body-parser' );
const cookieParser = require( 'cookie-parser' );

const indexRouter = require( './routes/index' );
const productsRouter = require( './routes/products' );

const app = express();

// Step 1: Configure body parser to parse both JSON data as well as URL encoded data in request body 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser('shhh...'));

app.use( express.static( 'public' ) );

app.set( 'views', './views' );
app.set( 'view engine', 'ejs' );

app.use( '/', indexRouter );
app.use( '/products', productsRouter );

const port = process.env.PORT || 3000;

app.listen( port, err => {
    if( err ) throw err;

    console.log( 'Express Server is listening on port ' + port );
});
