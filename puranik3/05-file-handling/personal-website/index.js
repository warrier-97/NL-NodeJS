const http = require( 'http' );
const fs = require( 'fs' );
const anyBody = require( 'body/any' );
const url = require( 'url' );
const querystring = require( 'querystring' );

const server = http.createServer(function( req, res ) {
    res.setHeader( 'Content-Type', 'text/html' );
    
    const urlParts = url.parse( req.url, true );
    console.log( urlParts );

    switch( urlParts.pathname ) {
        case '/':
            fs.readFile( './index.html', 'utf8', function( error, data ) {
                if( error ) {
                    res.statusCode = 404;
                    res.end( 'Page not found' );
                    return;
                }

                res.end( data );
            });
            break;
        case '/contacts':
            res.statusCode = 301;
            res.setHeader( 'Location', '/contact' );
            res.end();
            break;
        case '/contact':
            fs.readFile( './contact.html', 'utf8', function( error, data ) {
                if( error ) {
                    res.end( 'Page not found' );
                    return;
                }

                res.end( data );
            });
            break;
        case '/getcontacts':
            fs.readdir( './contacts', function( error, files ) {
                if( error ) {
                    res.end( 'error occured while reading contacts' );
                    return;
                }

                res.end( JSON.stringify( files.slice( 0, n ) ) );
            });
            break;
        case '/save':
            if( req.method.toUpperCase() !== 'POST' ) {
                res.end( 'Invalid HTTP method. Use POST /save to send contact data' );
            } else {
                // res.end( 'Work under progress' );

                anyBody( req, res, {}, function( error, contact ) {
                    if( error ) {
                        res.end( 'Sorry I had some issue noting your contact details' );
                        return;
                    }

                    fs.writeFile( `./contacts/${contact.email}.txt`, `Name: ${contact.name} | Email: ${contact.email}`, 'utf8', function( error ) {
                        if( error ) {
                            res.end( 'Sorry, I was unable to save your contact information. Try again.' );
                            return;
                        } else {
                            res.end( `Hi ${contact.name}, I will reach out to you on ${contact.email}` );
                            return;
                        }
                    });
                });
            }
            break;
        default:
            res.end( 'Page not found' );
    }
});

server.listen( 8080 );
