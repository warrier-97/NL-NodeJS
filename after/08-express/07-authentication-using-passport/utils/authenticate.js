/**
 * Defines middleware for authentication
 */
function authenticate( req, res, next ) {
    if( !req.user ) {
        return res.redirect( '/auth/login-page' );
    }

    next();
};

module.exports = authenticate;