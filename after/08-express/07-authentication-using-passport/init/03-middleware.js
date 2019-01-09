/**
 * initialize standard middleware - body parser, cookie parser and static file server
 */
const bodyParser = require( 'body-parser' );
const cookieParser = require( 'cookie-parser' );
const express = require( 'express' );
const session = require( 'express-session' );
const path = require( 'path' );

module.exports = function( app ) {
    app.use( bodyParser.json() );
    app.use( bodyParser.urlencoded( { extended: false } ) );
    app.use( cookieParser() );

    // Make sure to configure the SESSION_SECRET environment variable before starting the app
    // If You can use it directly like below (commented code), then anyone with access to the repo with project files can find the session secret
    // app.use(session({
    //     secret: 'secret'
    // }));
    let secret = process.env.SESSION_SECRET;
    if( !secret ) throw( new Error( 'SESSION_SECRET not present in environment' ) );
    
    app.use(session({
        secret: secret
    }));

    // Warning: I am not sure if having the static file server included here is a good idea - it may be necessary to have this somewhere later in the middleware stack
    app.use( express.static( path.join( __dirname, '../public' ) ) );
};