var httpStatus = require( 'http-status' );
var _ = require( 'lodash' );
var utils = require( '../../utils/utils' );

var mongoose = require( 'mongoose' );
var User = mongoose.model( 'User' );

function find( req, res, next ) {
    User
        .find()
        .sort( 'username' )
        .select( 'username' )
        .exec(function( err, users ) {
            if( !users ) {
                return utils.sendJsonErrorResponse( req, res, httpStatus.NOT_FOUND, 'Users not found' );
            }

            if( err ) {
                return utils.sendJsonErrorResponse( req, res, httpStatus.NOT_FOUND, err.message );
            }

            res.status( httpStatus.OK ).json( users );
        });
}

function create( req, res, next ) {
    var user = req.body;
    
    if( !user ) {
        return utils.sendJsonErrorResponse( req, res, httpStatus.BAD_REQUEST, "User details not present in request body" );
    }

    // we are yet to check for duplicate username first
    User
        .create( user, function( err, userNew ) {
            if( err ) {
                return utils.sendJsonErrorResponse( req, res, httpStatus.BAD_REQUEST, err.message );
            }

            return res.status( httpStatus.CREATED ).json( userNew );
        });
}

function isRegisteredUser( req, res, next ) {
    let body = req.body;

    User.findOne(
        {
            username: body.username,
            password: body.password
        },
        function (err, user) {
            if( !user ) {
                return utils.sendJsonErrorResponse( req, res, httpStatus.UNAUTHORIZED, "Incorrect login credentials supplied" );
            }

            if (err) {
                return utils.sendJsonErrorResponse( req, res, httpStatus.NOT_FOUND, err.message );
            }

            res.status( httpStatus.OK ).json({
                username: body.username
            });
        }
    );
}

module.exports = {
    find,
    create,
    isRegisteredUser
};