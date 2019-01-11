const express = require( 'express' );
const data = require( '../data/seed.json' );

const router = express.Router();

router.get( '/', function( req, res ) {
    res.json( data.reviews );
});

module.exports = router;