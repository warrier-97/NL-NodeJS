const express = require( 'express' );
const session = require( 'express-session' );

const app = express();

const user = {
    username: 'john.doe@example.com',
    password: 'password'
};

app.set( 'view engine', 'ejs' );

// to parse form body
app.use( express.urlencoded( { extended: false } ) );

app.use(session({
    secret: 'shh' // should not be stored in code
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

app.listen( 3100, function( error ) {
    if( error ) {
        console.log( 'error starting server : ' + error.message );
        return;
    }

    console.log( 'started on port 3100' );
})