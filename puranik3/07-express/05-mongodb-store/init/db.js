const mongoose = require( 'mongoose' );

mongoose.connect( 'mongodb://localhost:27017/store' );

mongoose.connection.on( 'connected', function() {
    console.log( 'connected to the DB' )
});

mongoose.connection.on( 'error', function( error ) {
    console.error( 'error on trying to connect to DB : ', error.message );
});