const mongoose = require( 'mongoose' );
const config = require( '../config.json' );

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

var appPort, dbUri;

appPort = normalizePort( process.env.PORT || config.app && config.app.port || 3000 );
dbUri = `${config.data_sources[0].protocol}://${config.data_sources[0].server}:${config.data_sources[0].port}/${config.data_sources[0].db}`;

mongoose.connect( dbUri );

mongoose.connection.on('connected', function() {
    console.log( 'Mongoose connected to %s', dbUri );
});

mongoose.connection.on('error', function( err ) {
    console.error( 'Mongoose connection error : %o', err );
});

mongoose.connection.on('disconnected', function() {
    console.log( 'Mongoose disconnected from %s', dbUri );
});

var gracefulShutdown = function( msg, callback ) {
    mongoose.connection.close(function() {
        console.log( 'Mongoose disconnected through %s', msg );
        callback();
    });
};

// Make sure models are available
require( '../api/models/product' );
require( '../api/models/user' );