let server = require( 'net' ).createServer();

server.on( 'connection', socket => {
    console.log( 'new client connection' );
    socket.write( 'hello\n' );

    socket.on( 'data', data => {
        console.log( 'received ', data );
        
        // data is a beffer object and the optional encoding argument tells how it should be interpreted
        socket.write( data, 'utf8' );

    });

    socket.on( 'end', () => {
        console.log( 'client disconnected' );
    });
});

let port = process.env.PORT || 8000;
server.listen(8000, () => console.log( `tcp server is ready to listen on port ${port}` ) );