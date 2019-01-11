const express = require( 'express' );

const router = express.Router();

router.get( '/', function( req, res ) {
    res.send( 'I am a store server. You can ask me for products and reviews for products' );
});

module.exports = router;
