/**
 * initialize templating engine and source directory
 */
const path = require( 'path' );

module.exports = function( app ) {
    app.set( 'views', path.join( __dirname, '../server/views' ) );
    app.set( 'view engine', 'ejs' );
};