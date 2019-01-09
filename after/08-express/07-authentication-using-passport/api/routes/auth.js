const express = require( 'express' );
const router = express.Router();

const authCtrl = require( '../controllers/auth' );

router.get( '/users', authCtrl.find )
router.post( '/users', authCtrl.create );
    
router.route( '/isregistered' )
    .post( authCtrl.isRegisteredUser );
    
module.exports = router;