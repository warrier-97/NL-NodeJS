const http = require( 'http' );

const port = process.env.PORT || 8080;

const server = http.createServer();

server.on( 'request', ( req, res ) => {
    let body = [];
    let randomDelay = 5000;
    let requestCounter = 0, responseCounter = 0;

    req
        .on( 'data', ( chunk ) => {
            console.log( 'request data received : ', chunk, arguments );
            requestCounter++;

            body.push( chunk );
            
            setTimeout(() => {
                res.write( chunk );
                responseCounter++;

                console.log( 'piece of response was sent ', responseCounter );

                if( responseCounter === requestCounter ) {
                    res.end();
                }
            }, randomDelay);

            randomDelay *= 2;
        })
        .on( 'end', () => {
            console.log( 'request ended : ', arguments );

            res.on( 'error', ( err ) => {
                console.log( 'response error : ', err, arguments );
                console.log( err );
            });

            /*
            body = Buffer.concat( body ).toString();
            res.write( body );
            res.end();
            */
        })
        .on( 'error', ( err ) => {
            console.log( 'request error : ', err, arguments );
            console.log( err );
        });
});

server.listen(port, () => {
    console.log( `listening on port ${port} : `, arguments );
});