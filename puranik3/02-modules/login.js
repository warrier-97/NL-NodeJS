const anyBody = require( 'body/any' );
const http = require( 'http' );

const server = http.createServer(function( req, res ) {
    anyBody( req, res, {}, function( error, body ) { // error-first callback
        if( error ) {
            res.end( 'Some error occured' );
            return;
        }

        console.log( body );
        if( body.username === 'john.doe@example.com' && body.password === 'password' ) {
            res.end( `Hello ${body.username}! You are logged in` );
        } else if( body.username === undefined || body.password === undefined ) {
            res.end( `Username or password is missing` );
        } else {
            res.end( `Username or password is incorrect. You are not authorized` );
        }
    });
});

server.listen( 8080 );