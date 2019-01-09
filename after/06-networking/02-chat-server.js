// exercise: broadcast when a person joins - add commands - eg. to leave the chatroom
let server = require( 'net' ).createServer();

let sockets = {}, socketId = 0;

server.on( 'connection', socket => {
    console.log( 'new client connection' );

    socket.id = socketId++;
    socket.write( 'Hello! Please tell me your name: ' );

    socket.on( 'data', data => {
        console.log( 'received ', data );
        let message = data.toString().trim();

        if( !sockets[socket.id] ) {
            socket.name = message;
            sockets[socket.id] = socket;
            return;
        }
        
        Object.values( sockets ).forEach( ( s ) => {
            if( socket !== s ) {
                s.write( `${socket.name} : ${message}\n`, 'utf8' );
            }
        });
    });

    socket.on( 'end', () => {
        delete sockets[socket.id];
        console.log( 'client disconnected' );
    });
});

let port = process.env.PORT || 8000;
server.listen(8000, () => console.log( `tcp server is ready to listen on port ${port}` ) );