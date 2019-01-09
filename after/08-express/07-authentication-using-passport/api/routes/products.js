const express = require( 'express' );
const router = express.Router();

const productsCtrl = require( '../controllers/products' );

// route() returns an instance of a single route which you can then use to handle HTTP verbs with optional middleware. Use router.route() to avoid duplicate route naming and thus typing errors.
router.route( '/' )
    .get( productsCtrl.find )
    .post( productsCtrl.create );

router.route( '/:productId' )
    .get( productsCtrl.findById )
    .put( productsCtrl.updateById )
    .delete( productsCtrl.deleteById );

module.exports = router;