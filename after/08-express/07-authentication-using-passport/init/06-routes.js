const indexRouter = require( '../server/routes/index' );
const authRouter = require( '../server/routes/auth' );
const productsRouter = require( '../server/routes/products' );
const productsApiRouter = require( '../api/routes/products' );
const authApiRouter = require( '../api/routes/auth' );

const config = require( '../config.json' );

module.exports = function( app ) {
    app.use( '/', indexRouter );
    app.use( '/auth', authRouter );
    app.use( '/products', productsRouter );

    app.use( config.api.prefix + '/products', productsApiRouter );
    app.use( config.api.prefix + '/auth', authApiRouter );

    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });
    
    app.use(function(err, req, res, next) {
        res.status( 404 ).render( '404' );
        console.error( 'Page requested by user was not found' );
    });
    
};