const express = require( 'express' );
const router = express.Router();

const productsCtrl = require( '../controllers/products' );
const authenticate = require( '../../utils/authenticate' );

// this secures all routes
router.use( authenticate );

router.get( '/', productsCtrl.renderProducts );
router.get( '/:id', productsCtrl.renderProduct );

module.exports = router;