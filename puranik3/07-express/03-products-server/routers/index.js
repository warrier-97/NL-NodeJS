const express = require( 'express' );

const router = express.Router();

// Return the title and version number of the application
router.get( '/', function( req, res ) {
    // Both of these will be the app object on which we will "use" this router
    // req.app, res.app
    const app = req.app;

    res
        .set( 'Content-Type', 'text/html' )
        .send( app.get( 'title' ) + '<br />' + app.get( 'version' ) );
});

module.exports = router;