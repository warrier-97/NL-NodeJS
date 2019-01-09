/**
 * initialize session and passport - this has to be done after session, cookie parser, and body parser have been initialized as passport uses these
 */
const passport = require( 'passport' );

module.exports = function( app ) {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser( ( user, done ) => {
        done( null, user );
    });
    
    passport.deserializeUser( ( user, done ) => {
        done( null, user );
    });

    require( './strategies/strategy.local' );
};