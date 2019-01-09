const express = require( 'express' );
const router = express.Router();

const productsCtrl = require( '../controllers/products' );

router.get( '/', productsCtrl.renderProducts );
router.get( '/:id', productsCtrl.renderProduct );

module.exports = router;