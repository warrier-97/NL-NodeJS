const config = require( '../config.json' );

module.exports = function( app ) {
    const port = process.env.PORT || config.app.port;

    app.listen( port, err => {
        if( err ) throw err;

        console.log( 'Express Server is listening on port ' + port );
    });
};