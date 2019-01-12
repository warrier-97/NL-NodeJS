const express = require( 'express' );

const router = express.Router();

router.get( '/', function( req, res ) {
    // Both of these will be the app object on which we will "use" this router
    console.log( req.app, res.app );
    res.send( 'I am a store server. You can ask me for products and reviews for products' );
});

module.exports = router;
