const passport = require( 'passport' );
const express = require( 'express' );
const router = express.Router();

const authCtrl = require( '../controllers/auth' );
const authenticate = require( '../../utils/authenticate' );

// passport.authenticate() returns a middleware which uses the underlying strategy to perform login
router.post( 
    '/login',
    passport.authenticate( 'local', { failureRedirect: '/auth/login-page' } ), 
    authCtrl.afterLogin 
);
router.post( '/register', authCtrl.register );

router.get( '/login-page', authCtrl.renderLoginPage );
router.get( '/registration-page', authCtrl.renderRegistrationPage );
router.route( '/profile-page' )
    .all( authenticate ) // this secures the single route /auth/profile-page
    .get( authCtrl.renderProfilePage );

module.exports = router;