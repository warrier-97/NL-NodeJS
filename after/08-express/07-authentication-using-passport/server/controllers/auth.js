const http = require( 'http' );
const request = require( 'request' );
const httpStatus = require( 'http-status' );
const utils = require( '../../utils/utils' );
const config = require( '../../config.json' );

function renderLoginPage( req, res, next ) {
    if( !req.user ) {
        res.render( 'login', {
            title: 'Login',
            message: ''
        });
    } else {
        res.redirect( '/auth/profile-page' );
    }
}

function renderRegistrationPage( req, res, next ) {
    res.render( 'register', {
        title: 'Registration page'
    });
}

function renderProfilePage( req, res, next ) {
    res.render( 'profile', {
        title: 'Profile page',
        user: req.user
    });
}

function afterLogin( req, res, next ) {
    return res.redirect( '/auth/profile-page' );
}

function register( req, res, next ) {
    request.post(
        {
            url: 'http://127.0.0.1:3000/api/auth/users',
            json: true,
            body: req.body,
            headers: req.headers.cookie // forward headers received from the client to the API
        },
        function (error, response, body) {
            let user = body;
            if( error ) {
                return next( new Error( 'Error while trying to register user' ) );
            }
            if (!error && response.statusCode == httpStatus.CREATED) {
                req.login(
                    user, 
                    ( error ) => {
                        if ( error ) {
                            return next( error );
                        }
                        return res.redirect( '/auth/profile-page' );
                    }
                );
            } else {
                next();
            }
        }
    );
}

module.exports = {
    renderLoginPage,
    renderRegistrationPage,
    renderProfilePage,
    afterLogin,
    register
};