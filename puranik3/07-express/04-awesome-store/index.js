const express = require( 'express' );
const path = require( 'path' );
const indexRouter = require( './routers/index' );

const app = express();

app.set( 'view engine', 'ejs' );
app.set( 'views', path.join( _dirname, 'views' ) );

app.use( indexRouter );

const port = process.env.PORT || 8080;
app.listen( port, function( error ) {
    if( error ) {
        console.log( 'Error starting server : ' + error.message );
        return;
    }

    console.log( 'Server started on port ' + port );
});