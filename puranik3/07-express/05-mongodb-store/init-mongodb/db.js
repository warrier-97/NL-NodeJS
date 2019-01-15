require( '../models/Product' );
require( '../models/Review' );

const mongoose = require( 'mongoose' );
const data = require( '../init/seed.json' );
const Product = mongoose.model( 'Product' );
const Review = mongoose.model( 'Review' );

mongoose.connect( 'mongodb://localhost:27017/store' );

mongoose.connection.on( 'connected', function() {
    console.log( 'connected to the DB' );
    loadData();
});

mongoose.connection.on( 'error', function( error ) {
    console.error( 'error on trying to connect to DB : ', error.message );
});

function loadData() {
    // generated product id will be stored here
    const productIdArray = [];
    let counter = 0;

    data.products.forEach(function( product ) {
        let productObj = new Product( product );
        productObj.save(function( error, savedProduct ) {
            productIdArray.push( savedProduct._id );
            console.log( productIdArray );
            
            if( error ) {
                console.error( 'Some error occured when trying to save product with name = ' + product.name );
                return;
            }

            console.log( 'Product with name = ' + savedProduct.name + ' has been saved with id = ' + savedProduct._id );

            counter++;
            if( counter === data.products.length ) {
                loadReviews();
            }
        });
    });

    function loadReviews() {
        data.reviews.forEach(function( review ) {
            let reviewObj = new Review( review );
            reviewObj.productId = new mongoose.Types.ObjectId( productIdArray[ review.productId - 1] );
            reviewObj.save(function( error, savedReview ) {
                if( error ) {
                    console.error( 'Some error occured when trying to save review with title = ' + review.title );
                    return;
                }

                console.log( 'Review with title = ' + savedReview.title + ' has been saved with id = ' + savedReview._id );
            });
        });
    }
}