/**
 * Instructions:
 * Follow the instructions provided in-place
 * 
 * Exercise: broadcast when a person joins - add commands - eg. to leave the chatroom
 */
let server = require( 'net' ).createServer();

// 1. Create an empty object to hold socket objects (say, variable sockets). Also create a counter for sockets, say socketId, initialized to 0.


server.on( 'connection', socket => {
    console.log( 'new client connection' );

    // 2. Generate next socketId in sequence and set it up as id property on socket. Send back a message asking for name of client.


    socket.on( 'data', data => {
        console.log( 'received ', data );

        // 3. Convert data to a string, trimming the leading and trailing spaces if any. Store in variable message (say).
        
        
        // 4. Check if sockets variables has a property as socketId sequence. If not add the name of client to socket and set the socket as value of socketId key and return.
        
        
        // 5. Iterate through socket objects (i.e. Object.values( sockets )) and send back name of sender and message to everyone except sender 
    });

    socket.on( 'end', () => {
        // 6. Remove socket for client from sockets object
        
        console.log( 'client disconnected' );
    });
});

let port = process.env.PORT || 8000;
server.listen(8000, () => console.log( `tcp server is ready to listen on port ${port}` ) );