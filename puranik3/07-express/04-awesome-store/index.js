const express = require( 'express' );
const path = require( 'path' );
const indexRouter = require( './routers/index' );
const productsRouter = require( './routers/products' );

const app = express();

app.set( 'view engine', 'ejs' );
app.set( 'views', path.join( __dirname, './views' ) );

app.set( 'app-details', {
    title: 'Awesome Store',
    description: 'Over 2 crore products from various sellers',
    version: '1.0.0'
});

// configure serving static files - .css, .js files etc.
app.use( express.static( path.join( __dirname, 'public' ) ) );

app.use( indexRouter );
app.use( productsRouter );

app.use(function( err, req, res, next ) {
    if( err.status === 404 ) {
        res.render( 'page-not-found' );
    } else {
        res.render( 'internal-server-error' );
    }
});

const port = process.env.PORT || 8080;
app.listen( port, function( error ) {
    if( error ) {
        console.log( 'Error starting server : ' + error.message );
        return;
    }

    console.log( 'Server started on port ' + port );
});