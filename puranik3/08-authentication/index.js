const express = require( 'express' );
const jwt = require( 'jsonwebtoken' );

const app = express();

app.use( express.urlencoded( { extended: false } ) );
app.use( express.json() );

const users = [
    {
        username: 'john.doe@example.com',
        password: 'password',
        isAdmin: true
    },
    {
        username: 'mark.smith@example.com',
        password: 'password',
        isAdmin: false
    }
];

function getUsers( username, password ) {
    return users.find(function( user ) {
        return user.username === username && user.password === password
    });
}

app.set( 'view engine', 'ejs' );

// to parse form body
app.use( express.urlencoded( { extended: false } ) );

app.get( '/', function( req, res ) {
    res.render( 'login', {
        errorLoggingIn: false
    });
});

app.post( '/login', function( req, res ) {
    // username-password comnination will be checked in DB
    console.log( req.body );

    if( req.body ) {
        var username = req.body.username;
        var password = req.body.password;
    }
    
    const user = getUsers( username, password );

    console.log( '*** user = ', user );
    console.log( '*** username = ', username );
    console.log( '*** password = ', password );
    
    if( req.body && user ) {
        console.log( username );
    
        // JWT token has details required for authentication (is allowed or not) and authorization (priviliges)
        const claims = {
            username: user.username,
            isAdmin: user.isAdmin
        };

        console.log( '*** claims = ', claims );

        jwt.sign( claims, 'shh...', { expiresIn: '24h' }, function( error, token ) {
            if( error ) {
                res.status(403).json({
                    message: error.message
                });
                return;
            }

            res.status(200).json({
                message: 'You are now logged in',
                token: token,
                username: username
            });
        });
    } else {
        res.status(403).render( 'login', {
            errorLoggingIn: true
        });
    }
});

app.get( '/private', function( req, res ) {
    console.log( req.headers.Authorization );
    if( req.session.user === undefined ) {
        // res.status(403).json({
        //     message: 'You are not authorized to view this page'
        // });
        res.redirect( '/' );
        return;
    }

    res.render( 'private' );
});

app.post( '/logout', function( req, res ) {
    req.session.destroy();
    res.redirect( '/' );
})

app.listen( 3100, function( error ) {
    if( error ) {
        console.log( 'error starting server : ' + error.message );
        return;
    }

    console.log( 'started on port 3100' );
})