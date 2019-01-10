const anyBody = require( 'body/any' );
const http = require( 'http' );
const users = require( './users.json' )

const server = http.createServer(function( req /* Incoming Message */, res /* ServerResponse */ ) {
    anyBody( req, res, {}, function( error, body ) {
        /**
         * Exercise: Set a cookie with a randomly generated string/number
         */
        res.setHeader( 'Content-Type', 'text/html' );
        res.setHeader( 'Set-Cookie', 'session_id=123' );
        
        if( error ) {
            res.end( 'Some error occured' );
            return;
        }

        for( let i = 0; i < users.length; i++ ) {
            if( users[i].username === body.username && users[i].password === body.password ) {
                res.end( `Hello ${body.username}! You are logged in` );
                return;
            }
        }

        if( body.username === undefined || body.password === undefined ) {
            res.end( `Username or password is missing` );
        } else {
            res.end( `Username or password is incorrect. You are not authorized` );
        }
    });
});

server.listen( 8080 );