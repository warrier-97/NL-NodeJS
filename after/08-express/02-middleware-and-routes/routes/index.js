/**
 * Instead of using the app methods to do all the routing, you can use the express.Router class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a "mini-app".
 */
const express = require( 'express' );
const path = require( 'path' );

const router = express.Router();

// configure router paths using use() or <method>() (i.e. get(), post() etc.)
router.use( ( req, res, next ) => {
    console.log( 'inside index router' );
    next();
});

router.get( '/', ( req, res, next ) => {
    res.sendFile( path.join( __dirname, '../html/index.html' ) );
});

router.get( '/about', ( req, res, next ) => {
    res.sendFile( path.join( __dirname, '../html/about.html' ) );
});

module.exports = router;