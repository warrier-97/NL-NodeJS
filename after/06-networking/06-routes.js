const http = require( 'http' );
const fs = require( 'fs' );

const server = http.createServer();

server.on( 'request', ( req, res ) => {
    let file;

    console.log( 'req.url = ', req.url );

    switch( req.url ) {
        case '/home':
            // send redirect
            res.writeHead( 301, {
                'Location': '/'
            });
            res.end();
            return;
        case '/':
            file = 'index.html';
            break;
        case '/about':
            file = 'about.html';
            break;
        default:
            file = '404.html';
    }

    res.writeHead( 200, {
        'Content-Type': 'text/html'
    });
        
    res.end( fs.readFileSync( __dirname + '/html/' + file ) );
});

const port = process.env.PORT || 8080;

// start the server on desired port
server.listen(port, () => {
    console.log( `listening on port ${port}` );
});