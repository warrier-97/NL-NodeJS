var httpStatus = require( 'http-status' );
var _ = require( 'lodash' );
var utils = require( '../../utils/utils' );

var mongoose = require( 'mongoose' );
var Product = mongoose.model( 'Product' );

function find( req, res, next ) {
    Product
        .find()
        .sort( 'name' )
        .select( 'name code description price releaseDate starRating imageUrl' )
        .exec(function( err, products ) {
            if( !products ) {
                return utils.sendJsonErrorResponse( req, res, httpStatus.NOT_FOUND, 'Products not found' );
            }

            if( err ) {
                return utils.sendJsonErrorResponse( req, res, httpStatus.NOT_FOUND, err.message );
            }

            res.status( httpStatus.OK ).json( products );
        });
}

function findById( req, res, next ) {
    var productId = ( req.params && req.params.productId ) || 0;
    
    if( !productId ) {
        return utils.sendJsonErrorResponse( req, res, httpStatus.BAD_REQUEST, 'Product id missing in request' );
    }

    Product
        .findById( productId )
        .select( 'name code description price releaseDate starRating imageUrl' )
        .exec(function( err, product ) {
            if( !product ) {
                return utils.sendJsonErrorResponse( req, res, httpStatus.NOT_FOUND, 'Product with given id not found' );
            }

            if( err ) {
                return utils.sendJsonErrorResponse( req, res, httpStatus.NOT_FOUND, err.message );
            }

            res.status( httpStatus.OK ).json( product );
        });
}

function create( req, res, next ) {
    var product = req.body;

    if( !product ) {
        return utils.sendJsonErrorResponse( req, res, httpStatus.BAD_REQUEST, 'Product details not present in request body' );
    }

    Product
        .create( product, function( err, productNew ) {
            if( err ) {
                return utils.sendJsonErrorResponse( req, res, httpStatus.BAD_REQUEST, err.message );
            }

            return res.status( httpStatus.CREATED ).json( productNew );
        });
}

function updateById( req, res, next ) {
    var productId = ( req.params && req.params.productId ) || 0;
    var productReq = req.body;
    
    if( !productId ) {
        return utils.sendJsonErrorResponse( req, res, httpStatus.BAD_REQUEST, 'Product id missing in request' );
    }

    if( !productReq ) {
        return utils.sendJsonErrorResponse( req, res, httpStatus.BAD_REQUEST, 'Product details not present in request body' );
    }

    Product
        .findById( productId )
        .exec(function( err, product ) {
            if( !product ) {
                return utils.sendJsonErrorResponse( req, res, httpStatus.NOT_FOUND, 'Product with given id not found' );
            }

            if( err ) {
                return utils.sendJsonErrorResponse( req, res, httpStatus.NOT_FOUND, err.message );
            }

            _.assign( product, productReq );

            product.save(function( err, productNew ) {
                if( err ) {
                    return utils.sendJsonErrorResponse( req, res, httpStatus.BAD_REQUEST, err.message );
                }

                res.status( httpStatus.OK ).json( productNew );
            });
        });
}

function deleteById( req, res, next ) {
    var productId = ( req.params && req.params.productId ) || 0;

    if( !productId ) {
        return utils.sendJsonErrorResponse( req, res, httpStatus.BAD_REQUEST, 'Product id missing in request' );
    }

    Product
        .findByIdAndRemove(productId)
        .exec(function( err, product ) {
            if( err ) {
                return utils.sendJsonErrorResponse( req, res, httpStatus.NOT_FOUND, err.message );
            }

            if( !product ) {
                return utils.sendJsonErrorResponse( req, res, httpStatus.NOT_FOUND, 'Product with given id not found' );
            }

            res.status( httpStatus.NO_CONTENT ).json( null );
        });
}

module.exports = {
    find,
    findById,
    create,
    updateById,
    deleteById
};