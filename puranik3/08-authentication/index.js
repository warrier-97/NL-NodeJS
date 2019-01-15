const express = require( 'express' );
const session = require( 'express-session' );
<<<<<<< HEAD
=======
const MongoStore = require('connect-mongo')(session);
const mongoose = require( 'mongoose' );

mongoose.connect( 'mongodb://localhost:27017/store' );

mongoose.connection.on( 'connected', function() {
    console.log( 'connected' )
})
>>>>>>> 6c76c4e8b6c950427989b098553f1af07d93eed7

const app = express();

const user = {
    username: 'john.doe@example.com',
    password: 'password'
};

app.set( 'view engine', 'ejs' );

// to parse form body
app.use( express.urlencoded( { extended: false } ) );

app.use(session({
<<<<<<< HEAD
    secret: 'shh' // should not be stored in code
=======
    secret: 'shh', // should not be stored in code
    store: new MongoStore({ mongooseConnection: mongoose.connection })
>>>>>>> 6c76c4e8b6c950427989b098553f1af07d93eed7
}));

app.get( '/', function( req, res ) {
    res.render( 'login', {
        errorLoggingIn: false
    });
});

app.post( '/login', function( req, res ) {
    // username-password comnination will be checked in DB
    if( req.body && req.body.username === user.username && req.body.password === user.password ) {
        const username = req.body.username;
        const password = req.body.password;
        console.log( username );
        req.session.user = user; // we set up the logged in user details on req.session
        res.send({
            message: 'You have successfully logged in'
        })
    } else {
        res.status(403).render( 'login', {
            errorLoggingIn: true
        });
    }
});

app.get( '/private', function( req, res ) {
    if( req.session.user === undefined ) {
        // res.status(403).json({
        //     message: 'You are not authorized to view this page'
        // });
        res.redirect( '/' );
        return;
    }

    res.render( 'private' );
});

<<<<<<< HEAD
=======
app.post( '/logout', function( req, res ) {
    req.session.destroy();
    res.redirect( '/' );
})

>>>>>>> 6c76c4e8b6c950427989b098553f1af07d93eed7
app.listen( 3100, function( error ) {
    if( error ) {
        console.log( 'error starting server : ' + error.message );
        return;
    }

    console.log( 'started on port 3100' );
})