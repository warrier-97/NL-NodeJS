require( '../models/Product' );

const mongoose = require( 'mongoose' );
const data = require( '../init/seed.json' );
const Product = mongoose.model( 'Product' );

mongoose.connect( 'mongodb://localhost:27017/store' );

mongoose.connection.on( 'connected', function() {
    console.log( 'connected to the DB' );
    loadData();
});

mongoose.connection.on( 'error', function( error ) {
    console.error( 'error on trying to connect to DB : ', error.message );
});

function loadData() {
    data.products.forEach(function( product ) {
        let productObj = new Product( product );
        productObj.save(function( error, savedProduct ) {
            if( error ) {
                console.error( 'Some error occured when trying to save product with name = ' + product.name );
                return;
            }

            console.log( 'Product with name = ' + savedProduct.name + ' has been saved with id = ' + savedProduct._id );
        });
    })
}