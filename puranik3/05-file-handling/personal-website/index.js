const http = require( 'http' );
const fs = require( 'fs' );
const anyBody = require( 'body/any' );

const server = http.createServer(function( req, res ) {
    res.setHeader( 'Content-Type', 'text/html' );
    
    switch( req.url ) {
        case '/':
            fs.readFile( './index.html', 'utf8', function( error, data ) {
                if( error ) {
                    res.end( 'Page not found' );
                    return;
                }

                res.end( data );
            });
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
